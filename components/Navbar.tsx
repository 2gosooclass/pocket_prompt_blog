"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: "1rem 2rem",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "1px solid var(--glass-border)",
      background: "var(--glass-bg)",
      backdropFilter: "var(--glass-blur)",
      WebkitBackdropFilter: "var(--glass-blur)",
    }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", textDecoration: "none" }} className="gradient-text">
        <img src="/images/logo.png" alt="2GOSOO AI Prompt Lab" style={{ height: "32px", width: "auto", borderRadius: "50%" }} />
        2GOSOO AI Prompt Lab
      </Link>
      <nav style={{ display: "flex", gap: "1.5rem", fontWeight: 600, fontSize: "0.9rem" }}>
        <Link href="/" style={{ color: "var(--fg-muted)", textDecoration: "none", transition: "color var(--transition-base)" }}>프롬프트 라이브러리</Link>
        <Link href="/insights" style={{ color: "var(--fg-muted)", textDecoration: "none", transition: "color var(--transition-base)" }}>심층 블로그(Insights)</Link>
        <Link href="/insights" style={{ color: "var(--fg-muted)", textDecoration: "none", transition: "color var(--transition-base)" }}>활용 사례</Link>
      </nav>
    </header>
  );
}
