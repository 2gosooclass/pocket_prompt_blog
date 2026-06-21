import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "liminal-space-waterpark-dreamcore",
  "title": "[영상 생성 AI] 기묘한 백룸 감성 무한 수중 워터파크 슬라이드 (Gemini Omni)",
  "desc": "투명한 워터 슬라이드 너머로 텅 빈 수중 도시가 보이는, 기묘하면서도 몽환적인 드림코어 1인칭(POV) 영상입니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/youtube_broll.png",
  "tags": [
    "드림코어",
    "백룸",
    "리미널스페이스",
    "Gemini Omni",
    "POV"
  ],
  "prompt_text": "POV shot sliding down a colorful, infinite indoor waterpark slide. The slide is entirely transparent, revealing a massive, empty, liminal space underwater city outside. The lighting is eerie yet nostalgic with a VHS tape aesthetic. Backrooms vibe, eerie dreamcore.",
  "prompt_kr": "알록달록한 끝없는 실내 워터파크 슬라이드를 타고 내려가는 1인칭 POV 샷. 슬라이드는 완전히 투명하여, 바깥의 거대하고 텅 빈 리미널 스페이스 수중 도시를 보여줍니다. 조명은 기묘하면서도 향수를 불러일으키는 VHS 테이프 미학을 지니고 있습니다. 백룸(Backrooms) 분위기, 기묘한 드림코어.",
  "content": "📢 [프롬프트 라이브러리 요약]\n끝없이 이어지는 알록달록한 실내 워터파크 슬라이드를 타고 내려가는 1인칭 시점의 영상입니다. 투명한 슬라이드 밖으로는 거대하고 텅 빈 수중 도시가 펼쳐지며, VHS 테이프 특유의 노스탤지어와 기이함이 섞인 조명을 통해 '백룸(Backrooms)'이나 '드림코어(Dreamcore)' 분위기를 연출했습니다.\n\n### 💡 사용 팁 (Tips for Success)\n**제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `liminal space`, `Backrooms vibe`, `eerie dreamcore` 키워드가 기괴하면서도 계속 보게 되는 심리적 호러 감성을 완성합니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n1. **슬라이드 종류 변경:** `waterpark slide` ➔ `endless spiral staircase` (끝없는 나선형 계단) 또는 `abandoned mall escalator` (버려진 쇼핑몰 에스컬레이터)\n2. **외부 환경 변경:** `underwater city` ➔ `galaxy of floating islands` (떠다니는 섬들로 이루어진 은하계)\n3. **비디오 감성 변경:** `VHS tape aesthetic` ➔ `CCTV security camera aesthetic` (CCTV 보안 카메라 감성)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Waterpark prompt added!")
