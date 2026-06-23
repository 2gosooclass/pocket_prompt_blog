import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { ArrowRight, BookOpen } from "lucide-react";
import { getAllPosts } from "../../lib/mdx";

export const metadata = {
  title: "심층 블로그 | 2GOSOO AI Prompt Lab",
  description: "실제 비즈니스에 적용하여 성과를 낸 진짜 활용 사례와 구글 SEO 최적화 가이드를 제공합니다.",
};

export default function InsightsPage() {
  const posts = getAllPosts("insights");

  // Sort by date (latest first)
  posts.sort((a, b) => new Date(b.metadata.date).getTime() - new Date(a.metadata.date).getTime());

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">Insights & Use Cases</h1>
            <p>
              단순한 프롬프트를 넘어, 실제 비즈니스에 적용하여 성과를 낸 "진짜 활용 사례"를 공유합니다.<br/>
              구글이 사랑하는 심층 분석 글과 튜토리얼을 지금 만나보세요.
            </p>
          </section>

          <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem", marginTop: "2rem" }}>
            {posts.map((post) => (
              <article key={post.slug} className="glass-card" style={{ display: "flex", gap: "2.5rem", padding: "1.5rem", borderRadius: "24px", flexDirection: "row", alignItems: "center", transition: "transform var(--transition-base), box-shadow var(--transition-base)" }}>
                <div style={{ flex: "0 0 320px", height: "220px", borderRadius: "16px", overflow: "hidden", background: "var(--bg-subtle)", position: "relative" }}>
                  <img src={post.metadata.image} alt={post.metadata.title} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--transition-slow)" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "1.2rem", paddingRight: "1rem" }}>
                  <div>
                    <span className="badge badge-primary" style={{ marginBottom: "0.75rem", display: "inline-block" }}>
                      <BookOpen size={12} style={{ marginRight: "4px" }}/>
                      {post.metadata.category || '심층 블로그'}
                    </span>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                      <Link href={`/insights/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>{post.metadata.title}</Link>
                    </h2>
                  </div>
                  <p style={{ color: "var(--fg-muted)", fontSize: "1.05rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.metadata.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--fg-subtle)", fontWeight: 500 }}>{post.metadata.date}</span>
                    <Link href={`/insights/${post.slug}`} className={styles.cardLink} style={{ padding: "0.5rem 1rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-full)", border: "1px solid var(--border)", display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--fg)' }}>
                      글 읽기 <ArrowRight size={16} />
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
