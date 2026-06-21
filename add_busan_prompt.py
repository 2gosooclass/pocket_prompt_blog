import json
import random
from datetime import datetime

with open("public/data/posts_data.json", "r", encoding="utf-8") as f:
    posts = json.load(f)

new_id = max([p["id"] for p in posts]) + 1

new_post = {
  "id": new_id,
  "category": "영상 생성",
  "slug": "busan-hyperlapse-selfie",
  "title": "[영상 생성 AI] 10초 만에 끝나는 부산 20곳 하이퍼랩스 셀피 여행",
  "desc": "레퍼런스 이미지(내 얼굴) 한 장만 넣으면, 동일한 인물이 0.5초 간격으로 부산 랜드마크 20곳을 순회하는 압도적인 숏츠 영상이 만들어집니다.",
  "views": f"{random.randint(100, 500)}.{random.randint(1, 9)}k",
  "time": "4 min read",
  "date": datetime.now().strftime("%Y-%m-%d"),
  "image": "/images/asian_night_market_fpv.png",
  "tags": [
    "하이퍼랩스",
    "여행",
    "숏츠",
    "Kling",
    "브이로그"
  ],
  "prompt_text": "10s hyper-lapse selfie-travel video of the beautiful 20-year-old Korean model from reference image 1. Strict identity consistency. 20 distinct Busan landmarks with hard cuts every 0.5 seconds. Handheld selfie-stick camera angle, wide-angle lens capturing her face and iconic backdrops. High clarity, vibrant cinematic color grading.\nLOCATIONS: 1. Haeundae Beach, 2. Gamcheon Culture Village, 3. Gwangalli Bridge night lights, 4. Haedong Yonggungsa Temple, 5. Jagalchi Market, 6. Taejongdae cliffs, 7. BIFF Square, 8. Songdo Cable Car, 9. Beomeosa Temple, 10. Busan Tower, 11. Oryukdo Skywalk, 12. Dalmaji-gil, 13. Shinsegae Centum City, 14. F1963, 15. Jeonpo Cafe Street, 16. Dadaepo sunset, 17. Huinnyeoul Village, 18. Busan Cinema Center, 19. Dongbaek Island, 20. Marine City skyline.",
  "prompt_kr": "레퍼런스 이미지 1의 아름다운 20세 한국 모델의 10초 하이퍼랩스 셀피 여행 영상. 엄격한 정체성(얼굴) 일관성 유지. 0.5초마다 하드 컷으로 전환되는 부산의 20개 대표 랜드마크. 핸드헬드 셀피스틱 카메라 앵글, 그녀의 얼굴과 상징적인 배경을 담는 광각 렌즈. 높은 선명도, 생생하고 시네마틱한 컬러 그레이딩.\n장소: 1. 해운대 해수욕장, 2. 감천문화마을, 3. 광안대교 야경, 4. 해동용궁사, 5. 자갈치 시장, 6. 태종대 절벽, 7. BIFF 광장, 8. 송도 케이블카, 9. 범어사, 10. 부산타워, 11. 오륙도 스카이워크, 12. 달맞이길, 13. 신세계 센텀시티, 14. F1963, 15. 전포카페거리, 16. 다대포 일몰, 17. 흰여울문화마을, 18. 영화의전당, 19. 동백섬, 20. 마린시티 스카이라인.",
  "content": "📢 [프롬프트 라이브러리 요약]\n단 10초 만에 부산의 랜드마크 20곳을 0.5초 단위로 쪼개서 보여주는 틱톡/릴스용 극강의 하이퍼랩스(Hyper-lapse) 프롬프트입니다. 레퍼런스 이미지를 넣으면 동일한 인물이 부산 전역을 여행하는 엄청난 숏츠가 완성됩니다.\n\n### 💡 사용 팁 (Tips for Success)\n이미지-투-비디오(Image-to-Video) 기능과 캐릭터 일관성(Character Consistency) 유지 기능이 강력한 **Kling AI**나 **Luma Dream Machine**에 본인의 셀카 한 장을 넣고 이 프롬프트를 돌려보세요.\n\n### 🔄 수정 버전 프롬프트 (Variations)\n부산 말고 다른 도시로 적용하려면?\n`[Busan]`을 `Seoul`이나 `Tokyo`로 바꾸고 랜드마크 이름들만 현지 명소로 교체하면 전 세계 어디든 여행 브이로그 응용이 가능합니다!\n\n### 🚀 실제 활용 사례 (Use Cases)\n- **여행 유튜버:** 며칠 동안 돌아다니며 찍어야 할 인트로 몽타주 영상을 단 5분 만에 집에서 방구석 AI로 생성.\n- **지자체 홍보 마케터:** 부산 관광 홍보용 바이럴 숏폼 영상을 기획할 때 레퍼런스로 활용.",
  "verified": True
}

# Insert at the top so it shows first!
posts.insert(0, new_post)

with open("public/data/posts_data.json", "w", encoding="utf-8") as f:
    json.dump(posts, f, ensure_ascii=False, indent=2)

print("Busan hyperlapse prompt added!")
