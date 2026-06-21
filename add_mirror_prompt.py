import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "surreal-mirror-dimension-flip",
  "title": "[영상 생성 AI] 시공간이 뒤집히는 초현실 거울방 180도 착시 앵글 (Gemini Omni)",
  "desc": "초고속 비행 중 180도 배럴 롤을 도는 순간, 바닥의 반사된 가짜 세계가 진짜 하늘로 변해버리는 인셉션급 무빙 연출입니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/youtube_broll.png",
  "tags": [
    "초현실",
    "영화연출",
    "트랜지션",
    "Gemini Omni",
    "FPV"
  ],
  "prompt_text": "Ultra-fast POV flying shot in an endless room made entirely of mirrors. The floor is a shimmering, rippling silver liquid. The camera skims the liquid surface at high speed before performing a dramatic 180-degree barrel roll like a roller coaster. As the camera flips, the reflection on the liquid floor seamlessly transforms into the real sky, creating a surreal optical illusion where the ground becomes the heavens. Cinematic lighting, metallic reflections, surreal atmosphere, high-speed motion blur, 8k.",
  "prompt_kr": "완전히 거울로 이루어진 끝없는 방에서의 초고속 1인칭 비행 샷. 바닥은 반짝이고 물결치는 은빛 액체입니다. 카메라가 수면을 아슬아슬하게 초고속으로 스치며 날아가다가 롤러코스터처럼 극적인 180도 배럴 롤 회전을 합니다. 카메라가 뒤집히는 순간, 액체 바닥에 반사된 모습이 매끄럽게 진짜 하늘로 변하며 땅이 하늘이 되는 초현실적인 광학적 착시를 만듭니다. 시네마틱 조명, 금속성 반사, 초현실적 분위기, 고속 모션 블러, 8K.",
  "content": "📢 [프롬프트 라이브러리 요약]\n사방이 거울로 된 끝없는 방과 은빛 액체 바닥을 배경으로 한 영상입니다. 카메라가 수면 위를 초고속으로 비행하다가 180도 뒤집히며, 바닥의 반사가 실제 하늘로 변하는 초현실적인 착시 효과를 연출합니다. 금속성의 반사와 속도감 있는 모션 블러가 특징입니다.\n\n### 💡 사용 팁 (Tips for Success)\n**제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `180-degree barrel roll`과 `seamlessly transforms into the real sky` 키워드가 인셉션 뺨치는 공간 왜곡 효과를 만들어냅니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n1. **바닥 질감 변경:** `silver liquid` ➔ `glowing lava` (빛나는 용암) 또는 `black ink` (검은 잉크)\n2. **공간 배경 변경:** `room made entirely of mirrors` ➔ `endless ancient library` (끝없는 고대 도서관)\n3. **하늘 전환 변경:** `transforms into the real sky` ➔ `transforms into an underwater neon city` (물속 네온 도시로 변환)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Mirror dimension prompt added!")
