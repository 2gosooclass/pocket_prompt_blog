import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{
      background: "var(--bg-elevated)",
      borderTop: "1px solid var(--border)",
      padding: "3rem 2rem",
      marginTop: "auto",
      width: "100%",
    }}>
      <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem" }}>
        <div>
          <h3 className="gradient-text" style={{ fontSize: "1.2rem", fontWeight: 700 }}>2GOSOO AI Prompt Lab</h3>
          <p style={{ color: "var(--fg-subtle)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            © 2026 2GOSOO AI LAB. All rights reserved.
          </p>
        </div>
        <div style={{ display: "flex", gap: "3rem" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>카테고리</span>
            <Link href="/" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>AI 비즈니스</Link>
            <Link href="/" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>AI 교육</Link>
            <Link href="/" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>AI 법률생활</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>회사 및 법적 정보</span>
            <Link href="/about" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>회사 소개 (About Us)</Link>
            <a href="mailto:2gosoo@gmail.com" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>문의하기 (2gosoo@gmail.com)</a>
            <Link href="/terms" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>이용약관 (Terms)</Link>
            <Link href="/privacy" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>개인정보처리방침 (Privacy)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
