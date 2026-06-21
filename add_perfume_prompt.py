import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "luxury-perfume-commercial-macro",
  "title": "[영상 생성 AI] 럭셔리 향수 하이엔드 상업 광고 씨즐 샷 (Gemini Omni)",
  "desc": "물방울이 튀고 장미 꽃잎이 흩날리는 초정밀 매크로 슬로우 모션 향수 광고 영상을 클릭 한 번으로 제작합니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/commercial_beauty_product.png",
  "tags": [
    "광고",
    "제품홍보",
    "매크로",
    "Gemini Omni",
    "뷰티"
  ],
  "prompt_text": "Extreme macro slow-motion shot of a sleek glass perfume bottle resting on black obsidian. A single crystal-clear water drop falls onto the bottle, splashing in ultra-high detail. Suddenly, vibrant red rose petals burst and float in the air around the product. High-end commercial lighting, 8k resolution, photorealistic luxury advertisement.",
  "prompt_kr": "검은 흑요석 위에 놓인 매끄러운 유리 향수병의 극한 매크로 슬로우 모션 샷. 투명한 물방울 하나가 병 위로 떨어지며 초고화질로 물보라를 일으킵니다. 갑자기 선명한 붉은 장미 꽃잎들이 제품 주위 공중으로 터져 나와 흩날립니다. 하이엔드 상업 조명, 8K 해상도, 사실적인 럭셔리 광고.",
  "content": "📢 [프롬프트 라이브러리 요약]\n검은 흑요석 위에 놓인 매끄러운 유리 향수병을 초밀착 슬로우 모션으로 담아냈습니다. 투명한 물방울이 병 위로 떨어지며 정교한 물보라를 일으키고, 갑자기 선명한 붉은 장미 꽃잎들이 터져 나와 공중에 흩날리는 고급스러운 광고 연출입니다. 하이엔드 상업 조명을 사용해 포토릴리스틱한 럭셔리함을 강조했습니다.\n\n### 💡 사용 팁 (Tips for Success)\n**제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `Extreme macro slow-motion`과 `ultra-high detail` 키워드가 실제 수천만 원짜리 상업 촬영 장비(팬텀 카메라)로 찍은 듯한 씨즐(Sizzle) 샷을 만들어냅니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n1. **제품 변경:** `glass perfume bottle` ➔ `premium whiskey bottle` (프리미엄 위스키 병) 또는 `diamond watch` (다이아몬드 시계)\n2. **배경 변경:** `black obsidian` ➔ `white marble` (대리석) 또는 `ice blocks` (얼음 블록)\n3. **흩날리는 오브제 변경:** `red rose petals` ➔ `gold dust` (금가루) 또는 `fresh citrus slices` (신선한 감귤 조각)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Perfume prompt added!")
