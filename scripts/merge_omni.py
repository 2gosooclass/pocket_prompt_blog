import json
import os

BASE_DIR = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog"
FLOW_JSON = os.path.join(BASE_DIR, "public/data/flow_data.json")
POSTS_JSON = os.path.join(BASE_DIR, "public/data/posts_data.json")

with open(FLOW_JSON, "r", encoding="utf-8") as f:
    flow_data = json.load(f)

with open(POSTS_JSON, "r", encoding="utf-8") as f:
    posts_data = json.load(f)

# Get max ID
max_id = max(p["id"] for p in posts_data)

new_posts = []
for category in flow_data:
    for item in category["items"]:
        max_id += 1
        
        # Determine slug
        slug_base = item["title"].replace(" ", "-").replace(",", "").lower()
        
        # Build prompt text
        prompt_text = f"Action: {item['prompt']}\nCamera: {item['camera']}\nLighting: {item['lighting']}"
        
        # Content
        content = f"📢 [Google Omni 커스텀 비디오]\n\n이 프롬프트는 대표님의 사진(예: `{item['asset']}`)을 활용하여 할리우드급 영상을 생성하는 고급 마스터 템플릿입니다.\n\n### 💡 사용 팁 (Tips for Success)\n프롬프트 안의 `{item['asset']}` 키워드를 원하시는 이미지나 대상으로 교체하여 사용하세요!"

        post = {
            "id": max_id,
            "category": "영상 생성",
            "slug": f"google-omni-{slug_base}",
            "title": f"[Google Omni] {item['title']}",
            "desc": "구글 옴니(Google Omni) B롤 영상 생성을 위한 VVIP 하이엔드 커스텀 프롬프트 템플릿입니다.",
            "views": "0",
            "time": "1 min read",
            "date": "2026-06-23",
            "image": "/images/placeholder_video.png", # Fallback
            "tags": ["Google Omni", "영상 생성", "B롤", "Shorts", "마케팅"],
            "prompt_text": prompt_text,
            "prompt_kr": f"교체 키워드: {item['asset']}",
            "content": content,
            "verified": True,
            "youtubeId": item.get("youtubeId", ""),
            "omni_marker": True  # To identify them easily in batch uploader
        }
        new_posts.append(post)

# Append to the top of posts
posts_data = new_posts + posts_data

with open(POSTS_JSON, "w", encoding="utf-8") as f:
    json.dump(posts_data, f, ensure_ascii=False, indent=2)

print(f"Successfully merged {len(new_posts)} Google Omni prompts into posts_data.json")
