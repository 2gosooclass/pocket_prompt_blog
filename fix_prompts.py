import json

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

for p in posts:
    if p["id"] == 21:
        p["prompt_kr"] = "수정같이 맑은 물 위에 놓인 매끄러운 유리 향수병의 시네마틱 슬로우 모션 제품 촬영. 분홍색과 금색 꽃잎이 위에서 부드럽게 떨어지며 우아한 잔물결을 만듭니다. 볼류메트릭 조명, 8K 해상도, 실사, 상업 광고 스타일."
        p["content"] = "📢 [프롬프트 라이브러리 요약]\n하이엔드 향수나 뷰티 화보에서 볼 법한 고급스러운 텍스처(물결, 꽃잎)를 강조하는 제품 광고용 영상 프롬프트입니다.\n\n### 💡 사용 팁 (Tips for Success)\nRunway Gen-3 또는 Luma Dream Machine에 복사해서 넣으세요. `[향수병]` 부분을 원하는 다른 제품(예: 보석, 스킨케어 제품)으로 변경해도 멋지게 렌더링됩니다."
    elif p["id"] == 22:
        p["prompt_kr"] = "최신 스마트폰의 극적이고 미래지향적인 제품 공개 영상. 어두운 스튜디오의 액체 금속에서 스마트폰이 떠오릅니다. 네온 블루와 퍼플의 엣지 조명이 메탈릭 텍스처를 강조합니다. 매크로 렌즈, 부드러운 카메라 패닝, 하이엔드 상업 광고 미학."
        p["content"] = "📢 [프롬프트 라이브러리 요약]\n애플이나 삼성의 신제품 티저에서 쓰일 법한 액체 금속과 네온 라이팅 조합의 강렬한 테크 제품 트레일러 영상 프롬프트입니다.\n\n### 💡 사용 팁 (Tips for Success)\n어두운 배경과 엣지 조명의 극적인 대비를 위해 `dark studio`와 `neon edge lighting` 키워드가 필수입니다. 제품 런칭 티저에 활용해 보세요."
    elif p["id"] == 23:
        p["prompt_kr"] = "얼음잔 속으로 쏟아지는 완벽한 에스프레소 샷의 초정밀 슬로우 모션 샷. 황금빛 크레마가 소용돌이 칩니다. 시네마틱 스튜디오 조명이 있는 어둡고 무드 있는 배경, 익스트림 클로즈업, 식욕을 돋우는 고예산 음식 상업 광고 스타일."
        p["content"] = "📢 [프롬프트 라이브러리 요약]\n눈으로 맛보는 씨즐(Sizzle) 광고의 정석! 커피나 음료 광고에 어울리는 슬로우 모션과 디테일한 크레마 질감을 살려내는 영상 프롬프트입니다.\n\n### 💡 사용 팁 (Tips for Success)\n식음료 마케팅에 최적화된 프롬프트입니다. `extreme close up`과 `high budget food commercial` 키워드가 들어가서 초고화질 음식 광고 느낌을 보장합니다."

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Prompts translated and fixed!")
