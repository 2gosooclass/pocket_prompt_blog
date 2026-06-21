"use client";

import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { ArrowRight, BookOpen, Search } from "lucide-react";

const insightPosts = [
  {
    id: 1,
    category: "활용 사례",
    title: "AI 프롬프트 하나로 인스타 릴스 대본 10개를 1분 만에 뽑는 방법",
    desc: "인스타그램 릴스 조회수를 떡상시킨 비밀 프롬프트의 실제 활용 사례를 파헤칩니다. 초보자도 바로 복붙해서 쓸 수 있는 실무 가이드.",
    date: "2026-06-20",
    image: "/images/marketing_thumbnail_1.png", // We will use placeholder or existing image
  },
  {
    id: 2,
    category: "심층 블로그",
    title: "구글 SEO 최적화 블로그 포스팅: ChatGPT 프롬프트 완벽 가이드",
    desc: "챗GPT가 써주는 글은 구글 상위 노출이 안 된다? 이 프롬프트를 쓰면 달라집니다. 체류시간과 H태그 구조까지 완벽히 잡아주는 SEO 특화 프롬프트 전략.",
    date: "2026-06-18",
    image: "/images/seo_blog_1781920233620.png",
  },
  {
    id: 3,
    category: "활용 사례",
    title: "영문 이력서(Resume) & 커버레터 자동 작성 AI 파이프라인 구축기",
    desc: "해외 취업을 준비하는 분들을 위한 완벽한 영문 이력서 자동화 프롬프트 세트. HR 담당자의 눈길을 끄는 Action Verb 활용법까지.",
    date: "2026-06-15",
    image: "/images/hr_resume_1781920951866.png",
  }
];

export default function InsightsPage() {
  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        {/* Main Content */}
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">Insights & Use Cases</h1>
            <p>
              단순한 프롬프트를 넘어, 실제 비즈니스에 적용하여 성과를 낸 "진짜 활용 사례"를 공유합니다.<br/>
              구글이 사랑하는 심층 분석 글과 튜토리얼을 지금 만나보세요.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
                <Search size={20} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--fg-subtle)" }} />
                <input 
                  type="text" 
                  placeholder="인사이트 검색..." 
                  style={{ width: "100%", padding: "1.1rem 1rem 1.1rem 3rem", borderRadius: "9999px", border: "1px solid var(--border)", background: "var(--bg-elevated)", color: "var(--fg)", outline: "none", fontSize: "1rem", boxShadow: "var(--shadow-sm)" }}
                />
              </div>
            </div>
          </section>

          {/* Top Banner Ad Placeholder */}
          <div className={styles.adPlaceholder} style={{ margin: "2rem 0", height: "120px" }}>
            <span style={{ fontWeight: 600 }}>Top Banner Ad</span>
            <span style={{ fontSize: "0.8rem" }}>[AdSense Placeholder]</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
            {insightPosts.map((post) => (
              <article key={post.id} className="glass-card" style={{ display: "flex", gap: "2.5rem", padding: "1.5rem", borderRadius: "24px", flexDirection: "row", alignItems: "center", transition: "transform var(--transition-base), box-shadow var(--transition-base)" }}>
                <div style={{ flex: "0 0 320px", height: "220px", borderRadius: "16px", overflow: "hidden", background: "var(--bg-subtle)", position: "relative" }}>
                  <img src={post.image} alt={post.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--transition-slow)" }} 
                       onMouseOver={e => e.currentTarget.style.transform = "scale(1.05)"}
                       onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
                       onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/320x220" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem", paddingRight: "1rem" }}>
                  <div>
                    <span className={`badge badge-primary`} style={{ marginBottom: "0.75rem", display: "inline-block" }}>{post.category}</span>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                      <Link href={`/insights/${post.id}`} style={{ textDecoration: "none", color: "inherit" }}>{post.title}</Link>
                    </h2>
                  </div>
                  <p style={{ color: "var(--fg-muted)", fontSize: "1.05rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--fg-subtle)", fontWeight: 500 }}>{post.date}</span>
                    <Link href={`/insights/${post.id}`} className={styles.cardLink} style={{ padding: "0.5rem 1rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-full)", border: "1px solid var(--border)" }}>
                      자세히 읽기 <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>

        {/* Right Sidebar (Sticky + Ads) */}
        <aside className={styles.sidebar}>
          <div className="glass-card" style={{ padding: "1.5rem" }}>
            <h3 style={{ marginBottom: "1rem", fontSize: "1.2rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.5rem" }}><BookOpen size={20} /> 인기 매거진</h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1rem" }}>
              <li style={{ borderBottom: "1px dashed var(--border)", paddingBottom: "0.75rem" }}>
                <a href="#" style={{ textDecoration: "none", color: "var(--fg-muted)", fontSize: "0.95rem" }}>구글 알고리즘이 칭찬하는 블로그 글쓰기 비법</a>
              </li>
              <li style={{ borderBottom: "1px dashed var(--border)", paddingBottom: "0.75rem" }}>
                <a href="#" style={{ textDecoration: "none", color: "var(--fg-muted)", fontSize: "0.95rem" }}>프롬프트 한 줄로 랜딩페이지 카피라이팅 끝내기</a>
              </li>
              <li>
                <a href="#" style={{ textDecoration: "none", color: "var(--fg-muted)", fontSize: "0.95rem" }}>AI 시대, 살아남는 주니어 기획자의 무기</a>
              </li>
            </ul>
          </div>

          {/* Sticky Sidebar Ad Placeholder */}
          <div className={styles.adPlaceholder} style={{ height: "600px", marginTop: "1.5rem" }}>
            <span style={{ fontWeight: 600 }}>Sticky Sidebar Ad</span>
            <span>300 x 600</span>
            <span style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}>[AdSense Placeholder]</span>
          </div>
        </aside>
      </div>
    </div>
  );
}
