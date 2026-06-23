import os
import glob
import json
import subprocess
import datetime
import shutil

# Paths
BASE_DIR = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog"
MP4_DIR = os.path.join(BASE_DIR, "public/mp4/flow")
ARCHIVE_DIR = os.path.join(MP4_DIR, "archive")
JSON_PATH = os.path.join(BASE_DIR, "public/data/flow_data.json")
UPLOAD_SCRIPT = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/09_SHORTS_SNIPER/upload_sniper_shorts.py"
CHANNEL = "2gosooclass"

os.makedirs(ARCHIVE_DIR, exist_ok=True)

def load_data():
    with open(JSON_PATH, "r", encoding="utf-8") as f:
        return json.load(f)

def save_data(data):
    with open(JSON_PATH, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)

def generate_schedule(index):
    """
    Calculate schedule based on the index of the video being uploaded.
    0-4: Today (spaced by 2 hours)
    5-8: Tomorrow (spaced by 3 hours)
    9-12: Day after tomorrow (spaced by 3 hours)
    13-15: Day 3 (spaced by 3 hours)
    """
    now = datetime.datetime.utcnow()
    
    if index < 5:
        # Today: start 1 hour from now, add 2 hours for each subsequent
        dt = now + datetime.timedelta(hours=1 + (index * 2))
    elif index < 9:
        # Tomorrow
        dt = now + datetime.timedelta(days=1)
        dt = dt.replace(hour=10 + ((index - 5) * 3), minute=0, second=0)
    elif index < 13:
        # Day 2
        dt = now + datetime.timedelta(days=2)
        dt = dt.replace(hour=10 + ((index - 9) * 3), minute=0, second=0)
    else:
        # Day 3
        dt = now + datetime.timedelta(days=3)
        dt = dt.replace(hour=10 + ((index - 13) * 3), minute=0, second=0)
        
    return dt.strftime("%Y-%m-%dT%H:%M:%SZ")

def find_unmapped_prompt(data):
    # Iterate through categories and items to find one without a youtubeId
    for c_idx, category in enumerate(data):
        for i_idx, item in enumerate(category['items']):
            if not item.get("youtubeId"):
                return c_idx, i_idx, item
    return None, None, None

def main():
    print("🚀 Google Flow Shorts Batch Uploader Started...")
    
    mp4_files = glob.glob(os.path.join(MP4_DIR, "*.mp4"))
    if not mp4_files:
        print("✅ No MP4 files found in the drop zone. Exiting.")
        return
        
    print(f"📦 Found {len(mp4_files)} MP4 files to process.")
    
    data = load_data()
    
    # Check how many have already been uploaded to calculate schedule index
    total_uploaded = sum(1 for c in data for item in c['items'] if item.get("youtubeId"))
    
    for mp4_file in mp4_files:
        filename = os.path.basename(mp4_file)
        print(f"\n▶ Processing: {filename}")
        
        c_idx, i_idx, item = find_unmapped_prompt(data)
        if not item:
            print("❌ No unmapped prompts left in flow_data.json! All 15 seem to be uploaded.")
            break
            
        title = f"[나만의 영상] {item['title']} - 하이엔드 AI 영상 제작법"
        desc = f"✨ VVIP 퀄리티의 하이엔드 AI 영상 마스터 프롬프트입니다.\n대표님의 평범한 제품 사진이나 이미지를 할리우드급 광고 영상으로 탈바꿈시켜 보세요.\n\n👉 '나만의 이미지'로 무한 확장되는 프리미엄 프롬프트 원본 복사하기:\n🔗 https://2gosooaipromptlab.com/flow\n\n[사용된 프롬프트 전문]\n{item['prompt']}\n\n#AI영상 #프리미엄프롬프트 #Midjourney #Luma #Kling #프롬프트엔지니어링 #마케팅자동화 #쇼츠"
        schedule_time = generate_schedule(total_uploaded)
        
        print(f"📅 Schedule: {schedule_time}")
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
            
            # Extract YouTube ID
            yt_id = None
            for line in output.split('\n'):
                if "Video successfully uploaded with ID:" in line:
                    yt_id = line.split("ID:")[1].strip()
                    break
                    
            if yt_id:
                print(f"🎉 Success! YouTube ID: {yt_id}")
                data[c_idx]['items'][i_idx]['youtubeId'] = yt_id
                save_data(data)
                
                # Move to archive
                shutil.move(mp4_file, os.path.join(ARCHIVE_DIR, filename))
                print(f"📁 Moved to archive.")
                
                total_uploaded += 1
            else:
                print("❌ Upload succeeded but couldn't parse YouTube ID from output.")
                print("Output:", output)
                
        except subprocess.CalledProcessError as e:
            print(f"❌ Upload Failed for {filename}")
            print(e.stderr)

    # Git push logic
    print("\n📦 Pushing updates to Vercel (GitHub)...")
    try:
        subprocess.run(["git", "add", "public/data/flow_data.json"], cwd=BASE_DIR, check=True)
        # Check if there's anything to commit
        status = subprocess.run(["git", "status", "--porcelain"], cwd=BASE_DIR, capture_output=True, text=True)
        if status.stdout.strip():
            subprocess.run(["git", "commit", "-m", "chore: Auto-update Flow YouTube IDs"], cwd=BASE_DIR, check=True)
            subprocess.run(["git", "push", "origin", "main"], cwd=BASE_DIR, check=True)
            print("✅ Successfully pushed to Vercel! Site will update in ~1 minute.")
        else:
            print("ℹ️ No changes to commit.")
    except Exception as e:
        print(f"❌ Failed to push to GitHub: {e}")

if __name__ == "__main__":
    main()
