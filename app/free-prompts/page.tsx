import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "../../lib/mdx";

export const metadata = {
  title: "무료 프롬프트 공개 | 2GOSOO AI Prompt Lab",
  description: "ChatGPT, Gemini 등 바로 복사해서 쓸 수 있는 검증된 무료 프롬프트를 공개합니다.",
};

export default function FreePromptsPage() {
  const posts = getAllPosts("free-prompts");

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">무료 프롬프트 100선</h1>
            <p>
              시니어 교육부터 비즈니스 자동화까지, 복사해서 바로 쓸 수 있는<br/>
              고품질 무료 프롬프트를 조건 없이 공유합니다.
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
                      {post.metadata.tags?.[0] || '무료 배포'}
                    </span>
                    <h2 style={{ fontSize: "1.75rem", fontWeight: 700, lineHeight: 1.3, color: "var(--fg)", letterSpacing: "-0.02em" }}>
                      <Link href={`/free-prompts/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>{post.metadata.title}</Link>
                    </h2>
                  </div>
                  <p style={{ color: "var(--fg-muted)", fontSize: "1.05rem", lineHeight: 1.6, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.metadata.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "0.5rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--fg-subtle)", fontWeight: 500 }}>{post.metadata.date}</span>
                    <Link href={`/free-prompts/${post.slug}`} className={styles.cardLink} style={{ padding: "0.5rem 1rem", background: "var(--bg-subtle)", borderRadius: "var(--radius-full)", border: "1px solid var(--border)", display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--fg)' }}>
                      프롬프트 복사하기 <ArrowRight size={16} />
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
