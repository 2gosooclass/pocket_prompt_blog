import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "kpop-idol-shuffle-dance",
  "title": "[영상 생성 AI] 아이돌 비주얼 K-Pop 스트릿 셔플 댄스 (Gemini Omni)",
  "desc": "트렌디한 스트릿 패션의 20대 한국인 남녀가 도시 한복판에서 완벽한 칼군무 셔플 댄스를 선보이는 역동적인 영상입니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/asian_night_market_fpv.png",
  "tags": [
    "댄스",
    "K팝",
    "아이돌",
    "Gemini Omni",
    "쇼츠"
  ],
  "prompt_text": "A stylish 20-year-old Korean man and woman with idol-like visuals performing an energetic shuffle dance together on a vibrant city street. They have trendy hairstyles and streetwear fashion. The camera captures their footwork in a dynamic way with smooth tracking shots. Cinematic urban lighting, high-quality photorealistic video, 8k.",
  "prompt_kr": "아이돌 같은 비주얼을 가진 세련된 20대 한국 남성과 여성이 활기찬 도시의 거리에서 에너제틱한 셔플 댄스를 함께 춥니다. 그들은 트렌디한 헤어스타일과 스트리트웨어 패션을 하고 있습니다. 카메라는 부드러운 트래킹 샷으로 그들의 역동적인 발동작을 포착합니다. 시네마틱한 도시 조명, 고품질 사실적 비디오, 8K.",
  "content": "📢 [프롬프트 라이브러리 요약]\n세련된 스트릿 패션과 트렌디한 헤어스타일을 한 20대 한국인 남녀가 활기찬 도시 거리에서 함께 에너제틱한 셔플댄스를 추는 모습입니다. 역동적인 발동작을 부드러운 트래킹 샷으로 담아냈으며, 시네마틱한 도시 조명 아래 고화질의 포토릴리스틱한 영상으로 구현했습니다.\n\n### 💡 사용 팁 (Tips for Success)\n**제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `idol-like visuals`와 `energetic shuffle dance` 키워드가 실제 틱톡커나 아이돌의 댄스 챌린지 같은 엄청난 퀄리티를 뽑아줍니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n1. **댄스 종류 변경:** `shuffle dance` ➔ `hip-hop breakdance` (힙합 브레이크 댄스) 또는 `elegant ballet` (우아한 발레)\n2. **장소 변경:** `vibrant city street` ➔ `abandoned warehouse with graffiti` (그래피티가 있는 버려진 창고)\n3. **인물 변경:** `Korean man and woman` ➔ `three teenage girls` (세 명의 10대 소녀들)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Dance prompt added!")
