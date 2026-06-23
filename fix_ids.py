import json

path = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog/public/data/posts_data.json"
with open(path, "r") as f:
    data = json.load(f)

for item in data:
    if item.get("omni_marker"):
        item["youtubeId"] = ""

with open(path, "w") as f:
    json.dump(data, f, ensure_ascii=False, indent=2)
