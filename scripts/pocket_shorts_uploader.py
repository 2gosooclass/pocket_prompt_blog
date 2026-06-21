import os
import glob
import json
import pickle
import shutil
from google_auth_oauthlib.flow import InstalledAppFlow
from google.auth.transport.requests import Request
from google.oauth2.credentials import Credentials
import googleapiclient.discovery
from googleapiclient.http import MediaFileUpload

# Paths
BASE_DIR = "/Users/2gosoo/Documents/2GOSOO_AI_LAB"
DROP_DIR = os.path.join(BASE_DIR, "02_PRODUCTION_LAB/POCKET_PROMPT_SHORTS_UPLOAD")
UPLOADED_DIR = os.path.join(DROP_DIR, "uploaded")
POSTS_DATA_PATH = os.path.join(BASE_DIR, "01_APP_BUILD/pocket_prompt_blog/public/data/posts_data.json")

# Scopes
SCOPES = ["https://www.googleapis.com/auth/youtube.upload"]

def get_authenticated_service():
    creds = None
    pickle_paths = [
        os.path.join(BASE_DIR, "00_AGENTS_CENTER/04_Secrets/auth/token.pickle"),
        os.path.join(BASE_DIR, ".agents/secrets/tokens/token.pickle")
    ]
    
    for path in pickle_paths:
        if os.path.exists(path):
            print(f"📦 Found pre-authorized pickle credentials token at: {path}")
            try:
                with open(path, "rb") as f:
                    creds = pickle.load(f)
                if creds:
                    if creds.valid:
                        print("✅ Loaded valid credentials from pickle!")
                        break
                    elif creds.expired and creds.refresh_token:
                        print("🔄 Refreshing expired credentials from pickle...")
                        creds.refresh(Request())
                        with open(path, "wb") as f:
                            pickle.dump(creds, f)
                        print(f"💾 Saved refreshed credentials back to: {path}")
                        break
            except Exception as e:
                print(f"⚠️ Failed to load pickle from {path}: {e}")
                creds = None

    if not creds or not creds.valid:
        raise ValueError("❌ Error: Valid credentials could not be loaded. Please re-authenticate the main token.pickle.")
        
    return googleapiclient.discovery.build("youtube", "v3", credentials=creds)

def process_videos():
    if not os.path.exists(DROP_DIR):
        print(f"❌ Error: Drop directory not found at: {DROP_DIR}")
        return

    # Load posts_data.json
    try:
        with open(POSTS_DATA_PATH, 'r') as f:
            posts_data = json.load(f)
    except Exception as e:
        print(f"❌ Error loading posts_data.json: {e}")
        return

    # Find all mp4 files
    mp4_files = glob.glob(os.path.join(DROP_DIR, "*.mp4"))
    if not mp4_files:
        print("ℹ️ No .mp4 files found in the drop directory.")
        return

    youtube = get_authenticated_service()

    for video_path in mp4_files:
        filename = os.path.basename(video_path)
        try:
            post_id = int(os.path.splitext(filename)[0])
        except ValueError:
            print(f"⚠️ Skipping {filename}: filename must be an integer post ID (e.g., 18.mp4).")
            continue

        # Find corresponding post
        post = next((p for p in posts_data if p['id'] == post_id), None)
        if not post:
            print(f"⚠️ Skipping {filename}: Post ID {post_id} not found in posts_data.json.")
            continue

        print(f"🚀 Found match for {filename}: {post['title']}")

        title = f"{post['title']} #Shorts"
        description = (
            f"{post['desc']}\n\n"
            f"👇 아래 링크에서 프롬프트를 확인하고 직접 생성해 보세요!\n"
            f"🔗 https://pocketpromptlab.com/post/{post_id}\n\n"
            f"#AI영상생성 #Omni #Sora #프롬프트엔지니어링 #Shorts"
        )
        tags = post.get('tags', []) + ["Shorts", "AI", "Prompt"]

        body = {
            "snippet": {
                "title": title[:100],
                "description": description,
                "tags": tags[:15],
                "categoryId": "27"
            },
            "status": {
                "privacyStatus": "public",
                "selfDeclaredMadeForKids": False
            }
        }

        media = MediaFileUpload(video_path, chunksize=-1, resumable=True, mimetype="video/mp4")
        
        print(f"📤 Uploading {filename} to YouTube...")
        try:
            request = youtube.videos().insert(
                part="snippet,status",
                body=body,
                media_body=media
            )
            
            response = None
            while response is None:
                status, response = request.next_chunk()
                if status:
                    print(f"   Progress: {int(status.progress() * 100)}%...")
                    
            video_id = response.get("id")
            print(f"✅ Success! YouTube Video ID: {video_id}")
            print(f"🔗 URL: https://youtu.be/{video_id}")

            # Update posts_data.json
            post['youtubeId'] = video_id
            with open(POSTS_DATA_PATH, 'w') as f:
                json.dump(posts_data, f, ensure_ascii=False, indent=2)
            print(f"📝 Updated posts_data.json for Post ID {post_id}")

            # Move file to uploaded directory
            if not os.path.exists(UPLOADED_DIR):
                os.makedirs(UPLOADED_DIR)
            shutil.move(video_path, os.path.join(UPLOADED_DIR, filename))
            print(f"📂 Moved {filename} to uploaded directory.\n")

        except Exception as e:
            print(f"❌ Error uploading {filename}: {e}\n")

if __name__ == "__main__":
    process_videos()
