import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "vintage-paris-couple-walk",
  "title": "[영상 생성 AI] 1970년대 파리 시네마틱 빈티지 필름 룩 (Gemini Omni)",
  "desc": "1970년대 파리 세느강변을 걷는 연인의 모습을 노이즈가 낀 35mm 빈티지 필름 감성으로 완벽하게 재현한 무드 영상입니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/youtube_broll.png",
  "tags": [
    "영화",
    "빈티지",
    "파리",
    "Gemini Omni",
    "감성"
  ],
  "prompt_text": "Cinematic film photography of a young couple in 1970s Paris, walking along the Seine at dusk, vintage fashion, grainy 35mm film aesthetic, warm nostalgic lighting. The couple walks slowly along the riverbank, their soft silhouettes reflected in the gentle ripples of the water as the camera smoothly follows their movement.",
  "prompt_kr": "1970년대 파리의 젊은 커플이 황혼녘 세느강을 따라 걷는 시네마틱 필름 사진. 빈티지 패션, 거친 35mm 필름 미학, 따뜻하고 향수를 불러일으키는 조명. 커플은 강둑을 따라 천천히 걷고, 카메라가 부드럽게 그들의 움직임을 따라가며 부드러운 실루엣이 잔잔한 물결에 반사됩니다.",
  "content": "📢 [프롬프트 라이브러리 요약]\n1970년대 파리, 해질녘 세느강변을 천천히 걷는 연인의 모습을 담았습니다. 카메라는 그들의 움직임을 부드럽게 따라가며, 물결에 비친 그들의 실루엣과 빈티지한 필름 분위기를 살려 시네마틱하게 연출했습니다.\n\n### 💡 사용 팁 (Tips for Success)\n**제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `grainy 35mm film aesthetic` 키워드가 아날로그 필름 특유의 노이즈와 따뜻한 색감을 완벽하게 살려줍니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n1. **장소 및 시대 변경:** `1970s Paris` ➔ `1990s New York` (90년대 뉴욕) 또는 `1980s Tokyo` (80년대 도쿄)\n2. **시간대 변경:** `at dusk` (해질녘) ➔ `under the rain` (비 내리는 날) / `at midnight` (한밤중)\n3. **인물 변경:** `young couple` ➔ `solitary traveler` (고독한 여행자)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Paris prompt added!")
