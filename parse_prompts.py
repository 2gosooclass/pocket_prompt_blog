import json
import re
from datetime import datetime
import random

with open("/Users/2gosoo/Desktop/test/프롬프트_전문_20선.md", "r", encoding="utf-8") as f:
    text = f.read()

blocks = re.split(r'### #\d+', text)[1:]

posts = []
for i, block in enumerate(blocks, start=1):
    title_match = re.search(r'^\s*(.+)', block)
    title = title_match.group(1).strip() if title_match else f"Prompt {i}"
    
    category_match = re.search(r'\*\*카테고리:\*\*\s*(.+)', block)
    category = category_match.group(1).strip() if category_match else "영상 생성"
    
    time_match = re.search(r'\*\*예상 시간:\*\*\s*(.+)', block)
    time_str = time_match.group(1).strip() if time_match else "3분"
    
    prologue_match = re.search(r'\*\*프롤로그.*?\*\*\s*\n(.*?)(\n\*\*|$)', block, re.DOTALL)
    desc = prologue_match.group(1).strip().replace('"', '') if prologue_match else ""
    if not desc:
        desc = f"2GOSOO Lab 실무 검증 완료된 {category} 프롬프트입니다."
        
    prompt_match = re.search(r'```(?:[\s\S]*?)\n([\s\S]*?)```', block)
    prompt_text = prompt_match.group(1).strip() if prompt_match else ""
    
    tips_match = re.search(r'\*\*사용 팁:\*\*\s*(.+)', block)
    tips = tips_match.group(1).strip() if tips_match else ""
    
    lab_match = re.search(r'💎 2GOSOO Lab 실무 검증 완료\*\*\s*>\s*(.+)', block)
    lab = lab_match.group(1).strip() if lab_match else ""
    
    content = f"📢 [프롬프트 라이브러리 요약]\n{desc}\n\n### 💡 사용 팁\n{tips}\n\n### 🚀 2GOSOO Lab 실무 검증\n{lab}"
    
    post = {
        "id": 0, # Will be set later
        "category": category,
        "slug": f"prompt-{i:02d}",
        "title": title,
        "desc": desc[:100] + "..." if len(desc) > 100 else desc,
        "views": f"{random.randint(10, 99)}.{random.randint(1, 9)}k",
        "time": time_str,
        "date": datetime.now().strftime("%Y-%m-%d"),
        "image": f"/images/prompt_{i:02d}.png",
        "prompt_text": prompt_text,
        "prompt_kr": "위 영문 프롬프트를 참고하여 사용하세요.",
        "content": content,
        "verified": True,
        "tags": [category.split()[0], "AI프롬프트", f"Prompt{i}"],
        "youtubeId": ""
    }
    posts.append(post)

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    existing_data = json.load(f)

next_id = max(p['id'] for p in existing_data) + 1 if existing_data else 1

for i, post in enumerate(posts):
    post['id'] = next_id + i

existing_data.extend(posts)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(existing_data, f, ensure_ascii=False, indent=2)

print(f"Successfully added {len(posts)} posts!")
