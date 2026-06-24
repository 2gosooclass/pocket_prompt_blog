import os
import glob
import json
import subprocess
import datetime
import shutil

# Paths
BASE_DIR = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog"
MP4_DIR = os.path.join(BASE_DIR, "public/mp4/flow/프로젝터")
ARCHIVE_DIR = os.path.join(BASE_DIR, "public/mp4/flow/archive")
JSON_PATH = os.path.join(BASE_DIR, "public/data/posts_data.json")
UPLOAD_SCRIPT = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/09_SHORTS_SNIPER/upload_sniper_shorts.py"
CHANNEL = "promptlab"

os.makedirs(ARCHIVE_DIR, exist_ok=True)

def load_data():
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def save_data(data):
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def generate_schedule(index):
    # Base datetime (tomorrow)
    now = datetime.datetime.now(datetime.timezone.utc)
    base_date = now.date() + datetime.timedelta(days=1)
    
    # 2 per day: US EDT 10:00 AM (14:00 UTC) and 6:00 PM (22:00 UTC)
    days_to_add = index // 2
    is_evening = index % 2 == 1
    
    target_date = base_date + datetime.timedelta(days=days_to_add)
    
    if not is_evening:
        # 10:00 AM EDT -> 14:00 UTC
        dt = datetime.datetime.combine(target_date, datetime.time(14, 0, 0), tzinfo=datetime.timezone.utc)
    else:
        # 6:00 PM EDT -> 22:00 UTC
        dt = datetime.datetime.combine(target_date, datetime.time(22, 0, 0), tzinfo=datetime.timezone.utc)
        
    # Ensure it's in the future
    if dt < now:
        dt += datetime.timedelta(days=1)
        
    return dt.strftime("%Y-%m-%dT%H:%M:%SZ")

def fuzzy_match_video_to_post(filename, data):
    import re
    # Clean filename for matching
    clean_name = re.sub(r'_[0-9]+$', '', os.path.splitext(filename)[0]).replace('_', ' ').lower()
    
    best_match = None
    best_score = 0
    
    for idx, item in enumerate(data):
        if not item.get("omni_marker") or item.get("youtubeId"):
            continue
            
        # Match based on prompt_text containing words from filename
        prompt_text = item.get("prompt_text", "").lower()
        title = item.get("title", "").lower()
        
        words = clean_name.split()
        score = sum(1 for w in words if len(w) > 3 and (w in prompt_text or w in title))
        
        if score > best_score:
            best_score = score
            best_match = (idx, item)
            
    # If score is good enough (at least 1 matching significant word)
    if best_score > 0:
        return best_match
    return None, None

def main():
    print("🚀 Google Omni Shorts Batch Uploader Started...")
    
    mp4_files = sorted(glob.glob(os.path.join(MP4_DIR, "*.mp4")))
    if not mp4_files:
        print("✅ No MP4 files found in the drop zone. Exiting.")
        return
        
    print(f"📦 Found {len(mp4_files)} MP4 files to process.")
    
    data = load_data()
    
    # Check how many are already scheduled to determine start index
    # (Assuming we start scheduling from tomorrow)
    total_scheduled = 0
    
    for mp4_file in mp4_files:
        filename = os.path.basename(mp4_file)
        print(f"\n▶ Processing: {filename}")
        
        idx, item = fuzzy_match_video_to_post(filename, data)

        if not item:
            print(f"⏭️ Skipping {filename}: No matching unmapped prompt found.")
            continue
            
        title = f"[영상 생성 AI] {item['title'].replace('[Google Omni] ', '')} | 맞춤형 B롤 영상 생성기 #Shorts"
        
        desc = f"유튜브 영상 중간중간에 삽입할 고퀄리티 자료 화면(B-Roll)을 무료 스톡 비디오 사이트를 뒤지지 않고 5초 만에 생성합니다.\n\n" \
               f"👇 아래 링크에서 프롬프트를 확인하고 직접 생성해 보세요!\n" \
               f"🔗 https://2gosooaipromptlab.com/post/{item['id']}\n\n" \
               f"------------------------------------------\n" \
               f"[마스터 프롬프트 전문]\n{item['prompt_text']}\n" \
               f"------------------------------------------\n\n" \
               f"#AI영상생성 #Omni #Sora #프롬프트엔지니어링 #Shorts"
               
        schedule_time = generate_schedule(total_scheduled)
        
        print(f"📅 Schedule: {schedule_time} (UTC)")
        print(f"📌 Title: {title}")
        
        cmd = [
            "python3", UPLOAD_SCRIPT,
            "--video", mp4_file,
            "--title", title,
            "--desc", desc,
            "--channel", CHANNEL,
            "--schedule", schedule_time
        ]
        
        try:
            print("⏳ Uploading to YouTube...")
            result = subprocess.run(cmd, capture_output=True, text=True, check=True)
            output = result.stdout
            
            yt_id = None
            for line in output.split('\n'):
                if "Video successfully uploaded with ID:" in line:
                    yt_id = line.split("ID:")[1].strip()
                    break
                    
            if yt_id:
                print(f"🎉 Success! YouTube ID: {yt_id}")
                data[idx]['youtubeId'] = yt_id
                data[idx]['date'] = schedule_time  # Time-Sync with Next.js frontend
                save_data(data)
                
                shutil.move(mp4_file, os.path.join(ARCHIVE_DIR, filename))
                print(f"📁 Moved to archive.")
                
                total_scheduled += 1
            else:
                print("❌ Upload succeeded but couldn't parse YouTube ID from output.")
                print("Output:", output)
                
        except subprocess.CalledProcessError as e:
            print(f"❌ Upload Failed for {filename}")
            print(e.stderr)

    print("\n📦 Pushing updates to Vercel (GitHub)...")
    try:
        subprocess.run(["git", "add", "public/data/posts_data.json"], cwd=BASE_DIR, check=True)
        status = subprocess.run(["git", "status", "--porcelain"], cwd=BASE_DIR, capture_output=True, text=True)
        if status.stdout.strip():
            subprocess.run(["git", "commit", "-m", "chore: Auto-update Omni YouTube IDs"], cwd=BASE_DIR, check=True)
            subprocess.run(["git", "push", "origin", "main"], cwd=BASE_DIR, check=True)
            print("✅ Successfully pushed to Vercel! Site will update in ~1 minute.")
        else:
            print("ℹ️ No changes to commit.")
    except Exception as e:
        print(f"❌ Failed to push to GitHub: {e}")

if __name__ == "__main__":
    main()
