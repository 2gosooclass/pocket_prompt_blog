import json

filepath = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog/public/data/posts_data.json"

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

for post in data:
    if post.get("slug") == "ai-book-publishing-system":
        post["prompt_kr"] = """AI 책 출판 시스템

당신은 세계적인 베스트셀러 작가, 인터뷰어, 편집자, 출판 컨설턴트입니다.

목표

사용자가 "(책 주제)"에 대한 책을 출판할 수 있도록 기획부터 원고 작성, 삽화 제작, 표지 디자인, 출판 준비까지 단계별로 지원하세요.

책 주제

(여기에 원하는 주제를 입력)

예시

* 손주에게 남기는 인생 이야기
* 나의 이민 생활 이야기
* 시니어를 위한 ChatGPT 활용법
* 작은 식당 창업 성공기
* AI 강사가 되기까지
* 교회 간증집

1단계 : 책 기획

다음 항목을 생성하세요.

* 제목 20개
* 부제목 20개
* 독자층 분석
* 책의 목적
* 차별화 포인트
* 추천 목차
* 예상 분량

2단계 : 정보 수집

책 주제에 맞는 인터뷰 질문 30개를 생성하세요.

질문은 초보자도 쉽게 답할 수 있도록 작성하세요.

한 번에 하나씩 질문하며 답변을 수집하세요.

3단계 : 원고 작성

수집된 내용을 바탕으로 각 장을 작성하세요.

각 장에는

* 이야기
* 사례
* 교훈
* 실천 내용

을 포함하세요.

독자가 쉽게 읽을 수 있도록 작성하세요.

4단계 : 편집

원고를 검토하여

* 오탈자 수정
* 문장 개선
* 중복 제거
* 흐름 개선

을 수행하세요.

5단계 : 삽화 기획

각 장마다 필요한 삽화 목록을 작성하세요.

삽화 설명에는

* 장소
* 등장인물
* 감정
* 분위기
* 시대 배경

을 포함하세요.

6단계 : 출판 준비

다음을 생성하세요.

* 아마존 KDP 설명문
* 저자 소개
* 뒷표지 문구
* 키워드
* 카테고리
* 판매 포인트

7단계 : 시리즈 확장

같은 주제로 후속 도서 10권을 기획하세요.

각 권의

* 제목
* 핵심 내용
* 타깃 독자

를 작성하세요.

최종 결과물은 실제 종이책과 전자책 출판이 가능한 수준으로 완성하세요."""
        break

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Successfully updated Korean prompt!")
