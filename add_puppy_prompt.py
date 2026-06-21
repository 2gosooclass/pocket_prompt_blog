import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "puppy-kitten-falling-in-love",
  "title": "[영상 생성 AI] 아기 고양이와 말티즈 강아지 심쿵 교감 영상 (Gemini Omni)",
  "desc": "치즈색 아기 고양이와 복슬복슬한 흰색 말티즈 강아지가 따스한 햇살 아래서 장난스럽게 교감하는 극강의 힐링 쇼츠를 만들어냅니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "2 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/youtube_broll.png",
  "tags": [
    "동물",
    "강아지",
    "고양이",
    "Gemini Omni",
    "힐링"
  ],
  "prompt_text": "A heart-meltingly cute 10-second video of a tiny ginger kitten and a fluffy white Maltese puppy falling in love. They are snuggling together on a soft, pastel-colored knitted blanket in a sunlit room. The kitten gently nuzzles the puppy's ear, and the puppy responds by playfully licking the kitten's nose. Warm natural sunlight, soft focus background, high-quality cinematic video, 4k, vertical 9:16 aspect ratio.",
  "prompt_kr": "작은 치즈색 아기 고양이와 복슬복슬한 흰색 말티즈 강아지가 사랑에 빠지는 마음이 녹아내릴 듯 귀여운 10초 영상. 햇살이 잘 드는 방 안에서 부드러운 파스텔 톤 니트 담요 위에 함께 웅크려 있습니다. 고양이가 강아지의 귀를 부드럽게 비비자, 강아지는 장난스럽게 고양이의 코를 핥으며 화답합니다. 따뜻한 자연광, 부드러운 아웃포커스 배경, 고품질 시네마틱 비디오, 4K, 세로 9:16 비율.",
  "content": "📢 [프롬프트 라이브러리 요약]\n주요 장면: 작은 치즈색 아기 고양이와 복슬복슬한 흰색 말티즈 강아지가 서로에게 푹 빠진 채 교감하는 아주 귀여운 10초 영상입니다.\n상호작용: 햇살이 잘 드는 방 안에서 부드러운 파스텔 톤 담요 위에 함께 누워 있습니다. 고양이가 강아지의 귀를 부드럽게 비비자, 강아지는 장난스럽게 고양이의 코를 핥으며 화답합니다.\n분위기: 따뜻한 자연광과 부드러운 아웃포커싱 배경을 사용하여 영화적이고 감성적인 분위기를 연출했습니다.\n화질 및 구도: 4K 고화질과 약속드린 9:16 세로 비율로 제작됩니다.\n\n### 💡 사용 팁 (Tips for Success)\n현존 최강의 멀티모달 비디오 생성기 **제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. 두 마리 동물의 털 질감과 자연스러운 상호작용을 완벽하게 뽑아냅니다.\n\n### 🔄 커스텀 수정 가이드 (How to Customize)\n동물 종류나 배경을 바꿔서 무한 생성해 보세요!\n1. **동물 변경:** `ginger kitten` ➔ `black bunny` (검은 토끼) / `Maltese puppy` ➔ `Golden Retriever puppy` (골든 리트리버 강아지)\n2. **배경 변경:** `sunlit room` ➔ `flowery spring garden` (꽃이 만발한 봄 정원)\n3. **상호작용 변경:** `licking the kitten's nose` ➔ `falling asleep together` (함께 잠드는 모습)",
  "verified": True
}

posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Puppy prompt added!")
