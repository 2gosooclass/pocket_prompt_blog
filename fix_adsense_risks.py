import json
import os
import random

base_dir = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog"

# 1. Remove AdSense Placeholders
files_to_fix = [
    "app/insights/page.tsx",
    "app/post/[id]/page.tsx",
    "app/page.tsx"
]

for rel_path in files_to_fix:
    path = os.path.join(base_dir, rel_path)
    if os.path.exists(path):
        with open(path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # We will replace the span lines or just the text
        content = content.replace("[AdSense Placeholder]", "")
        content = content.replace("In-Feed Ad", "")
        content = content.replace("Top Banner Ad", "")
        content = content.replace("Sticky Sidebar Ad", "")
        
        with open(path, 'w', encoding='utf-8') as f:
            f.write(content)

# 2. Fix unrealistic views in posts_data.json
json_path = os.path.join(base_dir, "public/data/posts_data.json")
if os.path.exists(json_path):
    with open(json_path, 'r', encoding='utf-8') as f:
        posts = json.load(f)
    
    for post in posts:
        # Generate realistic views between 15 and 350
        realistic_views = str(random.randint(15, 350))
        post["views"] = realistic_views
        
        # Increase read time to 4-5 mins if it's too short
        time_str = post.get("time", "")
        if "1 min" in time_str or "2 min" in time_str:
            post["time"] = f"{random.randint(4, 6)} min read"

    with open(json_path, 'w', encoding='utf-8') as f:
        json.dump(posts, f, ensure_ascii=False, indent=2)

print("Fixes applied successfully!")
