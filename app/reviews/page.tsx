import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { ArrowRight, Star } from "lucide-react";
import { getAllPosts } from "../../lib/mdx";

export const metadata = {
  title: "AI 도구 리뷰 | 2GOSOO AI Prompt Lab",
  description: "ChatGPT, Gemini, Claude 등 최신 AI 도구 활용법과 실제 비즈니스 적용 사례를 리뷰합니다.",
};

export default function ReviewsPage() {
  const posts = getAllPosts("reviews");

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">AI 도구 실전 리뷰</h1>
            <p>
              단순한 소개를 넘어, "어떻게 쓰면 돈이 되는가"에 집중합니다.<br/>
              ChatGPT, Gemini, Midjourney 등의 사용법과 프롬프트, 그리고 실제 결과물을 확인하세요.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginTop: "2rem" }}>
            {posts.map((post) => (
              <article key={post.slug} className="glass-card" style={{ display: "flex", gap: "2.5rem", padding: "1.5rem", borderRadius: "24px", flexDirection: "row", alignItems: "center", transition: "transform var(--transition-base), box-shadow var(--transition-base)" }}>
                <div style={{ flex: "0 0 320px", height: "220px", borderRadius: "16px", overflow: "hidden", background: "var(--bg-subtle)", position: "relative" }}>
                  <img src={post.metadata.image} alt={post.metadata.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--transition-slow)" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem", paddingRight: "1rem" }}>
                  <div>
                    <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                      {post.metadata.tags?.[0] || '리뷰'}
                    </span>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                      <Link href={`/reviews/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>{post.metadata.title}</Link>
                    </h2>
                  </div>
                  <p style={{ color: "var(--fg-muted)", fontSize: "1.05rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.metadata.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--fg-subtle)", fontWeight: 500 }}>{post.metadata.date}</span>
                    <Link href={`/reviews/${post.slug}`} className={styles.cardLink} style={{ padding: "0.5rem 1rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-full)", border: "1px solid var(--border)", display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--fg)' }}>
                      자세히 읽기 <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
