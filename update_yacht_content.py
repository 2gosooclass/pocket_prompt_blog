import json

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

posts[0]["content"] = """📢 [프롬프트 라이브러리 요약]
주제 및 주인공: 20대 한국인 남녀 모델이 출연하는 고급스러운 여름 패션 룩북 영상입니다.
배경 설정: 햇살이 내리쬐는 개인 요트와 고급 해안 리조트를 배경으로 우아한 포즈를 취하는 모습을 담았습니다.
의상 스타일: 여성 모델은 하늘거리는 실크 드레스와 디자이너 선글라스를, 남성 모델은 깔끔한 린넨 셔츠와 맞춤 반바지를 착용하여 세련미를 강조했습니다.
시각 효과: 하이 패션 영화 기법과 부드러운 골든 아워 조명, 활기찬 여름 색감을 적용하여 4K 고화질로 제작됩니다.
구도: 모바일 최적화를 위해 9:16 세로 비율을 유지했습니다.

### 💡 사용 팁 (Tips for Success)
현존 최강의 멀티모달 비디오 생성기 **제미나이 옴니(Gemini Omni)** 에 이 프롬프트를 복사해 넣으세요. 인물 피부의 질감과 햇빛의 반사광을 기가 막히게 뽑아냅니다.

### 🔄 커스텀 수정 가이드 (How to Customize)
이 프롬프트 하나로 수백 가지의 다른 광고 영상을 찍어낼 수 있습니다!
1. **모델 변경:** `Korean male and female model` ➔ `European blonde model` (유럽인 금발 모델)
2. **장소 변경:** `private yacht and a high-end coastal resort` ➔ `rooftop pool in Dubai` (두바이 루프탑 수영장)
3. **의상 변경:** `flowy silk dress and designer sunglasses` ➔ `chic winter coat and leather boots` (시크한 겨울 코트와 가죽 부츠)
원하는 컨셉에 맞춰 괄호 안의 영어 단어만 슬쩍슬쩍 바꿔서 무한 생성해 보세요!"""

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Yacht content updated!")
