import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "luxury-yacht-fashion-lookbook",
  "title": "[영상 생성 AI] 럭셔리 썸머 패션 룩북 (Gemini Omni)",
  "desc": "햇살이 내리쬐는 해안 리조트와 프라이빗 요트를 배경으로, 하이 패션 브랜드 광고처럼 우아한 20대 한국 남녀 모델의 4K 썸머 룩북을 만들어냅니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "3 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/commercial_beauty_product.png",
  "tags": [
    "패션",
    "룩북",
    "Gemini Omni",
    "여름",
    "쇼츠"
  ],
  "prompt_text": "Luxury summer fashion lookbook video featuring a beautiful 20-something Korean male and female model. They are posing elegantly on a sun-drenched private yacht and a high-end coastal resort. The female model wears a flowy silk dress and designer sunglasses; the male model wears a crisp linen shirt and tailored shorts. High-fashion cinematography, soft golden hour lighting, vibrant summer colors, 4k, vertical 9:16.",
  "prompt_kr": "아름다운 20대 한국인 남성 및 여성 모델이 등장하는 럭셔리 썸머 패션 룩북 비디오. 그들은 햇살이 내리쬐는 개인 요트와 고급 해안 리조트에서 우아하게 포즈를 취하고 있습니다. 여성 모델은 흐르는 듯한 실크 드레스와 디자이너 선글라스를 착용하고, 남성 모델은 산뜻한 리넨 셔츠와 맞춤형 반바지를 입고 있습니다. 하이 패션 시네마토그래피, 부드러운 골든 아워 조명, 생생한 여름 색상, 4K, 세로 9:16.",
  "content": "📢 [프롬프트 라이브러리 요약]\n주제 및 주인공: 20대 한국인 남녀 모델이 출연하는 고급스러운 여름 패션 룩북 영상입니다.\n배경 설정: 햇살이 내리쬐는 개인 요트와 고급 해안 리조트를 배경으로 우아한 포즈를 취하는 모습을 담았습니다.\n의상 스타일: 여성 모델은 하늘거리는 실크 드레스와 디자이너 선글라스를, 남성 모델은 깔끔한 린넨 셔츠와 맞춤 반바지를 착용하여 세련미를 강조했습니다.\n시각 효과: 하이 패션 영화 기법과 부드러운 골든 아워 조명, 활기찬 여름 색감을 적용하여 4K 고화질로 제작됩니다.\n구도: 모바일 최적화를 위해 9:16 세로 비율을 유지했습니다.\n\n### 💡 사용 팁 (Tips for Success)\n현존 최강의 멀티모달 비디오 생성기 **제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. `Korean male and female model` 부분을 원하는 인종이나 연령대로 수정하여 다양한 룩북을 제작할 수 있습니다.",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Yacht lookbook prompt added!")
