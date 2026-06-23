import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "../../lib/mdx";

export const metadata = {
  title: "AI 강의 리뷰 및 현장 | 시카고 한인 AI 교육",
  description: "시카고 한인 시니어, 자영업자 대상 오프라인 AI 교육 현장 스케치와 맞춤형 활용법 가이드.",
};

export default function LecturesPage() {
  const posts = getAllPosts("lectures");

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">오프라인 AI 강의 노트</h1>
            <p>
              시카고 한인 사회를 위한 맞춤형 AI 교육 현장과 실무 활용법.<br/>
              자영업 비즈니스 최적화부터 시니어 디지털 리터러시까지 생생한 현장 이야기를 전합니다.
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
                      {post.metadata.tags?.[0] || '강의 리뷰'}
                    </span>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                      <Link href={`/lectures/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>{post.metadata.title}</Link>
                    </h2>
                  </div>
                  <p style={{ color: "var(--fg-muted)", fontSize: "1.05rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.metadata.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--fg-subtle)", fontWeight: 500 }}>{post.metadata.date}</span>
                    <Link href={`/lectures/${post.slug}`} className={styles.cardLink} style={{ padding: "0.5rem 1rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-full)", border: "1px solid var(--border)", display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--fg)' }}>
                      수강 후기 읽기 <ArrowRight size={16} />
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
