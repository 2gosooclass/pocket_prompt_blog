import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "daegu-gyeongbuk-trade-mission-chicago",
  "title": "[템플릿] B2B 기업/기관 행사 초청 광고 영상 (대구-경북 무역사절단 사례)",
  "desc": "국제 비즈니스 행사, 무역 사절단, 컨퍼런스 초청을 위한 고품격 광고 영상 프롬프트입니다. 텍스트 오버레이와 장소/시간만 수정해서 바로 사용할 수 있습니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "4 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/trade_mission_chicago.png",
  "tags": [
    "비즈니스",
    "행사",
    "초청영상",
    "B2B",
    "광고템플릿"
  ],
  "prompt_text": "Cinematic corporate video for '2026 Daegu-Gyeongbuk USA Trade Mission'. The video features professional business networking in a modern conference room at the Crowne Plaza Chicago West Loop. On-screen text overlays clearly display: '2026 Daegu-Gyeongbuk USA Trade Mission', 'June 23, 2026', '10:00 AM - 5:00 PM', and 'Crowne Plaza Chicago West Loop, West Loop D'. Through the windows, the Chicago city view is visible. Professional Koreans and Americans are discussing advanced manufacturing, robotics, and drone technologies. The lighting is bright and professional. Korean dialogue (voice-over) says: '2026 대구-경북 미국 무역 사절단에 여러분을 초대합니다. 첨단 제조 및 로봇 기술의 혁신을 시카고에서 직접 만나보세요.' 8k, photorealistic luxury advertisement style.",
  "prompt_kr": "2026 대구-경북 미국 무역 사절단을 위한 시네마틱 기업 홍보 영상. 시카고의 크라운 플라자 웨스트 루프에 있는 현대적인 회의실에서 진행되는 전문적인 비즈니스 네트워킹 장면. 화면에 텍스트가 표시됨: '2026 Daegu-Gyeongbuk USA Trade Mission', 'June 23, 2026', '10:00 AM - 5:00 PM', 'Crowne Plaza Chicago West Loop, West Loop D'. 창밖으로 시카고 시내 전경이 보임. 한국인과 미국인 전문가들이 첨단 제조, 로봇 공학, 드론 기술에 대해 토론하고 있음. 밝고 전문적인 조명. 한국어 내레이션: '2026 대구-경북 미국 무역 사절단에 여러분을 초대합니다. 첨단 제조 및 로봇 기술의 혁신을 시카고에서 직접 만나보세요.' 8K 해상도, 포토리얼리스틱 럭셔리 광고 스타일.",
  "content": "📢 [템플릿 활용 가이드]\n본 프롬프트는 B2B 행사, 컨퍼런스, 기관별 초청장을 제작할 때 **\"그대로 텍스트만 갈아 끼워\"** 사용할 수 있는 광고 영상 템플릿입니다.\n\n행사 장소, 시간, 주제를 실제 정보로 교체하면, 영상 AI가 자동으로 해당 장소에 어울리는 분위기를 렌더링하고 내레이션까지 합성해 줍니다.\n\n### 💡 수정해야 할 핵심 포인트 (Customization Points)\n1. **행사명(Event Name):** `2026 Daegu-Gyeongbuk USA Trade Mission`을 본인의 행사명으로 변경하세요.\n2. **장소 및 일시:** `Crowne Plaza Chicago West Loop`, `June 23, 2026` 부분을 실제 개최 정보로 바꾸면, AI가 해당 지역의 랜드마크나 분위기(예: 창밖 풍경)를 알아서 반영합니다.\n3. **주제(Topics):** `advanced manufacturing, robotics` 대신 본인 행사의 핵심 산업(IT, 뷰티, 의료 등)을 입력하세요. 등장인물들의 소품이나 대화 분위기가 달라집니다.\n4. **내레이션(Voice-over):** 영상에 들어갈 안내 멘트를 수정하면, 최근의 AI 툴(Sora, Runway 등)은 입모양을 맞추거나 고품질 TTS를 입혀줍니다.\n\n이 프롬프트 하나만 있으면 비싼 외주 제작 없이도 글로벌 스탠다드에 맞는 기업 홍보 영상을 즉각적으로 뽑아낼 수 있습니다!",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print(f"Trade Mission prompt added with ID: {new_id}")
