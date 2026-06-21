import json

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

# Update tags
tags = posts[0]["tags"]
if "Kling" in tags:
    tags.remove("Kling")
if "Gemini Omni" not in tags:
    tags.append("Gemini Omni")
posts[0]["tags"] = tags

# Update content
posts[0]["content"] = """📢 [프롬프트 라이브러리 요약]
주요 컨셉: 참고 이미지 속 20대 한국 모델의 외형을 엄격하게 유지하며 부산을 여행하는 10초 분량의 하이퍼랩스 셀피 영상입니다.
편집 스타일: 20개의 서로 다른 부산 명소를 0.5초마다 빠르게 전환(Hard Cuts)하여 역동적인 리듬감을 줍니다.
카메라 설정: 셀카봉을 든 핸드헬드 앵글과 광각 렌즈를 사용하여 모델의 얼굴과 배경인 랜드마크가 동시에 잘 보이도록 설정했습니다.
시각적 품질: 높은 선명도와 활기차고 영화적인 색감을 적용하여 여행의 즐거운 분위기를 강조했습니다.
장소 리스트: 해운대, 감천문화마을, 광안대교 야경 등 부산의 대표 명소 20곳을 포함했습니다.

### 💡 사용 팁 (Tips for Success)
멀티모달 비디오 생성이 압도적인 **제미나이 옴니(Gemini Omni)** 에 본인의 셀카 한 장을 넣고 이 프롬프트를 돌려보세요. 얼굴 일관성(Identity Consistency)을 완벽하게 유지한 채 하이퍼랩스를 뽑아냅니다.

### 🔄 수정 버전 프롬프트 (Variations)
부산 말고 다른 도시로 적용하려면?
`[Busan]`을 `Seoul`이나 `Tokyo`로 바꾸고 랜드마크 이름들만 현지 명소로 교체하면 전 세계 어디든 여행 브이로그 응용이 가능합니다!"""

posts[0]["title"] = "[영상 생성 AI] 10초 만에 끝나는 부산 20곳 하이퍼랩스 셀피 (Gemini Omni)"

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Updated to Gemini Omni!")
