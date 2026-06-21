import json
from datetime import datetime

with open('public/data/posts_data.json', 'r') as f:
    data = json.load(f)

next_id = max(p['id'] for p in data) + 1 if data else 1

new_posts = [
  {
    "id": next_id,
    "category": "영상 생성",
    "slug": "omni-bioluminescent-cyberpunk-jellyfish",
    "title": "[영상 생성 AI] 기절주의! 사이버펑크 네온 웅덩이 속 발광 해파리 매크로 샷",
    "desc": "Omni 모델의 압도적인 매크로 질감 묘사력을 극한으로 끌어올리는 프롬프트. 물에 비친 네온사인과 해파리의 유기적 움직임을 미친 듯한 디테일로 뽑아냅니다.",
    "views": "11.2k",
    "time": "1분",
    "date": datetime.now().strftime("%Y-%m-%d"),
    "image": "/images/jellyfish_omni.png",
    "prompt_text": "Cinematic extreme macro shot of a translucent, bioluminescent jellyfish floating gracefully inside a shallow rain puddle reflecting a neon-lit cyberpunk city. The jellyfish pulses with electric blue and magenta light, its tentacles intricate and hyper-detailed. Raindrops hit the puddle creating ripples that distort the neon reflections. Shot on 100mm macro lens, anamorphic, volumetric lighting, photorealistic, 8k resolution, Unreal Engine 5 render style.",
    "prompt_kr": "네온 불빛이 비치는 사이버펑크 도시의 얕은 빗물 웅덩이 안에 우아하게 떠 있는 반투명한 발광 해파리의 시네마틱 익스트림 매크로 샷. 해파리는 일렉트릭 블루와 마젠타 빛으로 맥동하며, 촉수는 복잡하고 극도로 섬세합니다. 빗방울이 웅덩이에 떨어지며 네온 반사를 왜곡하는 파문을 만듭니다. 100mm 매크로 렌즈 촬영, 아나모픽, 볼류메트릭 라이팅, 포토리얼리스틱, 8K 해상도.",
    "content": "📢 [프롬프트 라이브러리 요약]\nSora나 Omni 같은 최신 비디오 생성 AI의 성능을 테스트할 때 가장 좋은 것은 **질감(Texture)과 광원(Lighting)**입니다.\n\n이 프롬프트는 사이버펑크 특유의 네온 불빛과 물의 파문, 그리고 해파리의 유기적인 움직임을 결합하여 시청자의 시선을 완벽하게 사로잡습니다.\n\n### 💡 사용 팁 (Tips for Success)\n- **해상도 설정:** 16:9 또는 9:16(숏츠용) 비율에 맞춰 생성하세요.\n- **모션 강도(Motion):** 너무 빠르지 않게 설정하여 해파리의 우아한 움직임을 강조하는 것이 좋습니다.\n\n### 🔄 변형 아이디어\n- `cyberpunk city` 대신 `ancient glowing ruins`(고대 발광 유적)로 변경하면 신비로운 판타지 느낌을 연출할 수 있습니다.\n\n### 🎥 유튜브 숏츠 결과물\n아래 영상은 이 프롬프트를 사용하여 실제로 생성한 결과물입니다.",
    "verified": True,
    "tags": ["Omni", "매크로", "사이버펑크"],
    "youtubeId": ""
  },
  {
    "id": next_id + 1,
    "category": "영상 생성",
    "slug": "omni-scifi-megastructure-drone-dive",
    "title": "[영상 생성 AI] 블록버스터급 스케일! 무너지는 거대 구조물 FPV 드론 다이빙",
    "desc": "FPV 드론 시점으로 수직 낙하하며 펼쳐지는 스펙터클한 폭발 씬 프롬프트. 엄청난 스케일의 입체감과 속도감을 완벽하게 구현합니다.",
    "views": "15.4k",
    "time": "1분",
    "date": datetime.now().strftime("%Y-%m-%d"),
    "image": "/images/scifi_megastructure_omni.png",
    "prompt_text": "High-speed FPV drone shot diving vertically down a collapsing, massive brutalist sci-fi megastructure. Huge concrete blocks are falling, massive explosions in the background erupting in bright orange and thick black smoke. Dust and debris flying past the camera lens. Dramatic cinematic lighting, intense action, gritty atmospheric atmosphere. Photorealistic, 8k, IMAX film aesthetic.",
    "prompt_kr": "초고속 FPV 드론 시점으로 붕괴되는 거대한 브루탈리스트 SF 메가스트럭처를 수직으로 하강하며 촬영. 거대한 콘크리트 블록들이 떨어지고, 배경에서는 밝은 오렌지색과 짙은 검은 연기를 뿜어내는 거대한 폭발이 일어납니다. 카메라 렌즈를 스쳐 지나가는 먼지와 파편들. 극적인 시네마틱 조명, 강렬한 액션, 거친 대기 환경. 포토리얼리스틱, 8K, IMAX 영화 미학.",
    "content": "📢 [프롬프트 라이브러리 요약]\n영상 생성 AI의 **공간 지각력과 입체감(Depth)**을 극한으로 테스트할 수 있는 FPV 다이빙 프롬프트입니다.\n\n빠른 속도감과 함께 물리 엔진이 적용된 듯한 붕괴 이펙트(먼지, 파편, 연기)가 결합되어 말 그대로 헐리우드 블록버스터의 한 장면을 만들어냅니다.\n\n### 💡 사용 팁 (Tips for Success)\n- **카메라 움직임:** AI 도구에 `Zoom-in` 혹은 `Move Forward` 패러미터가 있다면 최대치로 올려주세요.\n\n### 🎥 유튜브 숏츠 결과물\n아래 영상은 이 프롬프트를 사용하여 실제로 생성한 결과물입니다.",
    "verified": True,
    "tags": ["Omni", "FPV다이빙", "SF액션"],
    "youtubeId": ""
  },
  {
    "id": next_id + 2,
    "category": "영상 생성",
    "slug": "omni-mech-dragon-snowstorm",
    "title": "[영상 생성 AI] 판타지와 SF의 결합! 눈보라 속 메카닉 드래곤의 푸른 숨결",
    "desc": "단순한 동물이 아닌 기계 장치(Mech)가 결합된 드래곤 프롬프트. 눈보라와 푸른 화염의 극적인 온도차 라이팅이 미친 영상미를 뽑아냅니다.",
    "views": "18.9k",
    "time": "1분",
    "date": datetime.now().strftime("%Y-%m-%d"),
    "image": "/images/mech_dragon_omni.png",
    "prompt_text": "Hyper-realistic slow motion shot of a colossal mechanical dragon made of intricately detailed dark metallic plates and glowing neon blue circuits. The dragon is standing on a rugged cliff in a violent snowstorm. It rears back and breathes a massive torrent of bright blue fire. The intense light of the fire reflects off its metal scales and illuminates the falling snow. Epic fantasy sci-fi blend, cinematic color grading, 8k resolution, highly detailed.",
    "prompt_kr": "정교하고 섬세한 어두운 금속 판금과 빛나는 네온 블루 회로로 만들어진 거대한 기계 드래곤의 하이퍼리얼리즘 슬로우 모션 샷. 드래곤은 거친 눈보라가 치는 험준한 절벽에 서 있습니다. 뒤로 젖힌 후 밝은 푸른 불길의 거대한 급류를 내뿜습니다. 불꽃의 강렬한 빛이 금속 비늘에 반사되어 내리는 눈을 비춥니다. 서사적인 판타지와 SF의 융합, 시네마틱 컬러 그레이딩, 8K 해상도, 극강의 디테일.",
    "content": "📢 [프롬프트 라이브러리 요약]\n메카닉(SF)과 드래곤(판타지)이라는 두 장르를 결합하여 영상 AI의 **질감 혼합 및 파티클(눈송이, 불꽃)** 처리 능력을 확인하는 프롬프트입니다.\n\n특히 차가운 눈보라 속에서 내뿜는 푸른 화염의 광원이 메탈 재질에 반사되는 렌더링이 시선을 압도합니다.\n\n### 💡 사용 팁 (Tips for Success)\n- **광원(Lighting):** 대비를 강하게 주어야 하므로 어두운 환경(Dark environment)을 유지하는 것이 중요합니다.\n\n### 🎥 유튜브 숏츠 결과물\n아래 영상은 이 프롬프트를 사용하여 실제로 생성한 결과물입니다.",
    "verified": True,
    "tags": ["Omni", "메카닉", "판타지"],
    "youtubeId": ""
  }
]

data.extend(new_posts)

with open('public/data/posts_data.json', 'w') as f:
    json.dump(data, f, ensure_ascii=False, indent=2)

print("Posts successfully appended!")
