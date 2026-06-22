import json

filepath = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog/public/data/posts_data.json"

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

for post in data:
    if post.get("slug") == "ai-book-publishing-system":
        post["content"] = """📢 이 프롬프트는 책을 쓰고 싶은 사람을 위한 AI 출판 시스템입니다.

[사용 방법]

① [INSERT BOOK TOPIC] 입력
(예시)
- My Life Story for My Grandchildren
- How I Started a Business at 60
- Senior Guide to ChatGPT
- My Immigration Journey
- AI Instructor Success Story

② [INSERT TARGET AUDIENCE] 입력
(예시)
- Grandchildren
- Seniors
- Entrepreneurs
- Church Members
- Small Business Owners

③ BOOK TYPE 선택
(예시)
- Memoir
- Educational
- Self-Help
- Business
- Travel

[추천 모델]
- ChatGPT 5.5
- Claude Opus
- Gemini 3.5 Pro

[활용 분야]
- 자서전
- 회고록
- AI 활용서
- 강의 교재
- 창업 스토리
- 여행 에세이
- 신앙 간증집
- 전자책
- 아마존 KDP 출판"""
        break

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Successfully updated post formatting!")
