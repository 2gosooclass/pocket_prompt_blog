import json

filepath = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog/public/data/posts_data.json"

with open(filepath, 'r', encoding='utf-8') as f:
    data = json.load(f)

new_id = max(post['id'] for post in data) + 1

new_post = {
  "id": new_id,
  "category": "콘텐츠 작성",
  "slug": "ai-book-publishing-system",
  "title": "AI Book Publishing System",
  "desc": "단 하나의 프롬프트로 책 기획부터 원고 작성, 표지 제작, 삽화 생성, 아마존 KDP 출판 준비까지 진행할 수 있는 올인원 출판 시스템입니다. 자서전, 회고록, AI 활용서, 강의 교재, 창업 스토리, 여행기 등 다양한 유형의 책 제작에 활용할 수 있습니다.",
  "views": "New",
  "time": "10 min read",
  "date": "2026-06-22",
  "image": "/images/amazon-book.png",
  "prompt_text": "Act as a world-class bestselling author, interviewer, editor, publishing consultant, and book marketing strategist.\n\nYour goal is to help the user create and publish a complete book based on the topic provided below.\n\nBOOK TOPIC:\n[INSERT BOOK TOPIC]\n\nTARGET AUDIENCE:\n[INSERT TARGET AUDIENCE]\n\nBOOK TYPE:\n[Memoir, Autobiography, Educational, Self-Help, Business, Travel, Faith-Based, Workbook, or Other]\n\nFollow the steps below.\n\nSTEP 1 – BOOK PLANNING\n\nGenerate:\n\n* 20 book title ideas\n* 20 subtitle ideas\n* Ideal reader profile\n* Book positioning statement\n* Unique selling proposition\n* Detailed table of contents\n* Recommended chapter count\n* Estimated word count\n\nSTEP 2 – CONTENT DISCOVERY\n\nCreate 30 interview questions designed to gather the information needed to write the book.\n\nAsk questions one at a time.\n\nUse follow-up questions when necessary to uncover deeper stories, experiences, lessons, and insights.\n\nSTEP 3 – MANUSCRIPT CREATION\n\nUsing the collected information, write the complete manuscript.\n\nFor each chapter include:\n\n* Storytelling\n* Examples\n* Lessons learned\n* Actionable insights\n\nMaintain a consistent voice throughout the book.\n\nSTEP 4 – PROFESSIONAL EDITING\n\nReview and improve the manuscript by:\n\n* Correcting grammar\n* Removing repetition\n* Improving readability\n* Strengthening flow and structure\n\nSTEP 5 – ILLUSTRATION PLANNING\n\nFor every chapter generate:\n\n* Illustration ideas\n* Scene descriptions\n* Character descriptions\n* Emotional tone\n* Visual storytelling notes\n\nSTEP 6 – PUBLISHING PACKAGE\n\nGenerate:\n\n* Amazon KDP description\n* Author bio\n* Back cover copy\n* Suggested categories\n* SEO keywords\n* Book marketing angles\n\nSTEP 7 – SERIES EXPANSION\n\nCreate 10 follow-up book ideas that build on the same topic and audience.\n\nFor each book provide:\n\n* Title\n* Core concept\n* Reader benefit\n* Series connection\n\nDeliver all outputs at professional publishing standards suitable for paperback, hardcover, ebook, and Amazon KDP publishing.",
  "prompt_kr": "[위 영문 프롬프트 텍스트를 그대로 복사해서 챗GPT 등에 붙여넣고, 대괄호 부분만 본인의 책 주제와 타겟 독자로 변경하세요!]",
  "content": "📢 [프롬프트 라이브러리 요약]\n단 하나의 마스터 프롬프트로 책 기획부터 원고 작성, 표지 제작 아이디어, 아마존 KDP 출판 준비까지 완벽하게 끝내는 올인원 출판 시스템입니다.\n\n[진행 단계별 특징]\nSTEP 1. 책 기획 (제목, 목차, 독자 타겟팅 완벽 세팅)\nSTEP 2. 콘텐츠 발굴 (나만의 스토리를 끌어내는 심층 인터뷰 진행)\nSTEP 3. 원고 작성 (인터뷰를 바탕으로 전문적인 원고 작성)\nSTEP 4. 교정 교열 (매끄럽고 읽기 쉬운 문장으로 다듬기)\nSTEP 5. 삽화 기획 (각 챕터별 분위기에 맞는 일러스트 프롬프트 생성)\nSTEP 6. 출판 패키징 (아마존 KDP 상세페이지, SEO 키워드, 마케팅 문구)\nSTEP 7. 시리즈 기획 (후속 도서 10권 아이디어까지 한번에 기획)\n\n[사용 방법]\n챗GPT나 클로드 같은 LLM에 위 프롬프트를 복사하여 넣고, `[INSERT BOOK TOPIC]`과 `[INSERT TARGET AUDIENCE]`, `[BOOK TYPE]` 3곳만 본인의 책에 맞게 수정하여 실행하세요. AI가 훌륭한 출판 기획자이자 대필 작가가 되어 맞춤형 질문을 던져줄 것입니다!",
  "tags": [
    "전자책출판",
    "아마존KDP",
    "책쓰기",
    "원고작성",
    "퍼블리싱"
  ],
  "verified": True,
  "alt": "AI Book Publishing System"
}

data.insert(0, new_post)

with open(filepath, 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Successfully added post!")
