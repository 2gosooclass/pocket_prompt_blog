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
            <Link href="/?category=영상 생성" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>영상 생성</Link>
            <Link href="/?category=이미지 생성" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>이미지 생성</Link>
            <Link href="/?category=콘텐츠 작성" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>콘텐츠 작성</Link>
            <Link href="/?category=업무 자동화" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>업무 자동화</Link>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>회사 및 법적 정보</span>
            <Link href="/about" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>회사 소개 (About Us)</Link>
            <Link href="/contact" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>문의하기 (Contact)</Link>
            <Link href="/terms" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>이용약관 (Terms)</Link>
            <Link href="/privacy" style={{ color: "var(--fg-muted)", fontSize: "0.85rem", textDecoration: "none" }}>개인정보처리방침 (Privacy)</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
