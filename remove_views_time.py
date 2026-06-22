import os
import re

base_dir = "/Users/2gosoo/Documents/2GOSOO_AI_LAB/01_APP_BUILD/pocket_prompt_blog"

# 1. Update app/page.tsx
page_tsx_path = os.path.join(base_dir, "app/page.tsx")
if os.path.exists(page_tsx_path):
    with open(page_tsx_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove the div containing views and time icons
    # The div looks like:
    # <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", ... }}>
    #     <span><i className="fa-regular fa-eye"></i> {p.views}</span>
    #     <span><i className="fa-regular fa-clock"></i> {p.time}</span>
    # </div>
    content = re.sub(
        r'<div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var\(--fg-subtle\)", borderTop: "1px solid var\(--border\)", paddingTop: "0\.75rem" }}>\s*<span><i className="fa-regular fa-eye"></i> \{p\.views\}</span>\s*<span><i className="fa-regular fa-clock"></i> \{p\.time\}</span>\s*</div>',
        '',
        content,
        flags=re.MULTILINE
    )
    
    # Alternatively, just remove the span lines if the div format varies slightly
    content = re.sub(r'<span><i className="fa-regular fa-eye"></i> \{p\.views\}</span>', '', content)
    content = re.sub(r'<span><i className="fa-regular fa-clock"></i> \{p\.time\}</span>', '', content)
    
    # Let's remove the empty div if it remains
    content = re.sub(r'<div style={{[^>]*?}}>\s*</div>', '', content)

    # Let's also remove the sorting logic for 'trending'
    # Wait, the trending logic uses p.views. If I don't remove it, the code will still compile but just use '0' if undefined.
    # It's fine to leave the sorting logic, or I can remove the sorting button to be completely safe.
    content = re.sub(r'<button onClick=\{[^>]*?setSortOption\("trending"\)[^>]*?>.*?인기순\s*</button>', '', content, flags=re.DOTALL)

    with open(page_tsx_path, 'w', encoding='utf-8') as f:
        f.write(content)

# 2. Update app/post/[id]/page.tsx
post_tsx_path = os.path.join(base_dir, "app/post/[id]/page.tsx")
if os.path.exists(post_tsx_path):
    with open(post_tsx_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Remove <span>조회수: {post.views}</span>
    content = re.sub(r'<span>조회수:\s*\{post\.views\}</span>', '', content)
    # Remove <span>시간: {post.time}</span>
    content = re.sub(r'<span>시간:\s*\{post\.time\}</span>', '', content)
    
    # Clean up empty spans or empty dividers
    content = re.sub(r'<span style={{ color: "var\(--border\)" }}>\|</span>\s*(?=<div)', '', content)
    
    with open(post_tsx_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Removed views and time from UI.")
