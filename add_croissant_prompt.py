import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "appetizing-croissant-sizzle",
  "title": "[영상 생성 AI] 식욕 폭발 갓 구운 크로와상 푸드 포르노 (Gemini Omni)",
  "desc": "갓 구워낸 빵의 결이 찢어지며 김이 모락모락 피어오르는, 베이커리 SNS 홍보용으로 완벽한 식욕 자극 씨즐 영상을 만듭니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/youtube_broll.png",
  "tags": [
    "푸드",
    "마케팅",
    "크로와상",
    "Gemini Omni",
    "디저트"
  ],
  "prompt_text": "Cinematic close-up shot of a freshly baked, golden-brown flaky croissant being pulled apart by two hands. Hot steam rises softly from the warm layers of the pastry. Warm bakery lighting, shallow depth of field, appetizing food commercial style, ultra-detailed texture.",
  "prompt_kr": "갓 구워낸 갓 구워낸 황금빛 바삭한 크로와상을 양손으로 찢는 시네마틱 클로즈업 샷. 페이스트리의 따뜻한 겹 사이로 뜨거운 김이 부드럽게 피어오릅니다. 따뜻한 베이커리 조명, 얕은 피사계 심도, 먹음직스러운 음식 상업 스타일, 초정밀 질감.",
  "content": "📢 [프롬프트 라이브러리 요약]\n갓 구워낸 황금빛 크로와상을 양손으로 결대로 찢는 모습을 근접 촬영한 영상입니다. 따뜻한 빵 겹 사이로 피어오르는 부드러운 김과 베이커리의 따스한 조명을 담아냈습니다. 얕은 심도와 정교한 질감 표현으로 식욕을 자극하는 광고 스타일의 연출입니다.\n\n### 💡 사용 팁 (Tips for Success)\n**제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `Hot steam rises softly`와 `flaky croissant being pulled apart` 키워드가 빵의 질감과 식욕을 돋우는 김(Steam)의 움직임을 실감 나게 구현합니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n1. **음식 변경:** `flaky croissant` ➔ `cheesy mozzarella pizza` (치즈가 늘어나는 피자) 또는 `juicy medium-rare steak` (육즙 가득한 스테이크)\n2. **조명 변경:** `Warm bakery lighting` ➔ `dark moody restaurant lighting` (어두운 분위기의 레스토랑 조명)\n3. **액션 변경:** `pulled apart by two hands` ➔ `sliced by a sharp chef's knife` (셰프의 날카로운 칼로 썰리는 모습)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Croissant prompt added!")
