import React from "react";
import Link from "next/link";
import styles from "../page.module.css";
import { ArrowRight } from "lucide-react";
import { getAllPosts } from "../../lib/mdx";

export const metadata = {
  title: "AI 이미지 갤러리 | 2GOSOO AI Prompt Lab",
  description: "최고의 AI 프롬프트로 생성된 고품질 이미지 갤러리. 구글 이미지 검색에 최적화된 프롬프트와 메타데이터를 제공합니다.",
};

export default function GalleryPage() {
  const posts = getAllPosts("gallery");

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">AI 이미지 갤러리</h1>
            <p>
              단순한 이미지가 아닙니다. 어떤 프롬프트와 파라미터를 사용했는지,<br/>
              생성 과정과 상세 프롬프트를 함께 공개합니다.
            </p>
          </section>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem", marginTop: "2rem" }}>
            {posts.map((post) => (
              <article key={post.slug} className="glass-card" style={{ display: "flex", flexDirection: "column", padding: "1rem", borderRadius: "24px", transition: "transform var(--transition-base), box-shadow var(--transition-base)" }}>
                <div style={{ width: "100%", aspectRatio: "1/1", borderRadius: "16px", overflow: "hidden", background: "var(--bg-subtle)", position: "relative", marginBottom: "1rem" }}>
                  <img src={post.metadata.image} alt={post.metadata.alt} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform var(--transition-slow)" }} />
                </div>
                <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "0.75rem", padding: "0.5rem" }}>
                  <h2 style={{ fontSize: "1.25rem", fontWeight: 700, lineHeight: 1.3, color: "var(--fg)", letterSpacing: "-0.02em", display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    <Link href={`/gallery/${post.slug}`} style={{ textDecoration: "none", color: "inherit" }}>{post.metadata.title}</Link>
                  </h2>
                  <p style={{ color: "var(--fg-muted)", fontSize: "0.95rem", lineHeight: 1.5, display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {post.metadata.desc}
                  </p>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "1rem" }}>
                    <span style={{ fontSize: "0.85rem", color: "var(--fg-subtle)", fontWeight: 500 }}>{post.metadata.date}</span>
                    <Link href={`/gallery/${post.slug}`} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--brand)', fontSize: '0.9rem', fontWeight: 600, textDecoration: 'none' }}>
                      프롬프트 보기 <ArrowRight size={14} />
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
