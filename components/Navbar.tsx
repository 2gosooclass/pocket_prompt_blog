"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/" className="nav-logo gradient-text">
        <img src="/images/logo.png" alt="2GOSOO AI Prompt Lab" style={{ height: "32px", width: "auto", borderRadius: "50%" }} />
        2GOSOO AI Prompt Lab
      </Link>
      <nav className="nav-links">
        <Link href="/" className="nav-link">프롬프트 라이브러리</Link>
        <Link href="/insights" className="nav-link">심층 블로그(Insights)</Link>
        <Link href="/insights" className="nav-link">활용 사례</Link>
      </nav>
    </header>
  );
}
