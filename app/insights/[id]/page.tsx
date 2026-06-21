import React from "react";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import styles from "../../page.module.css";
import { insightPosts } from "../insightsData";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

export function generateStaticParams() {
  return insightPosts.map((post) => ({
    id: post.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function InsightPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const post = insightPosts.find((p) => p.id === resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <div style={{ marginBottom: "2rem" }}>
            <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--fg-muted)", textDecoration: "none", fontSize: "0.9rem" }}>
              <ArrowLeft size={16} /> 인사이트 목록으로 돌아가기
            </Link>
          </div>

          <article className="glass-card" style={{ padding: "3rem 2.5rem", borderRadius: "24px" }}>
            <div style={{ marginBottom: "2rem" }}>
              <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>{post.category}</span>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem", letterSpacing: "-0.02em", color: "var(--fg)" }}>
                {post.title}
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--fg-subtle)", fontSize: "0.95rem" }}>
                <span>작성: 2GOSOO AI LAB</span>
                <span>•</span>
                <span>시간: 5 min read</span>
                <span>•</span>
                <span>날짜: {post.date}</span>
              </div>
            </div>

            <div style={{ width: "100%", height: "400px", borderRadius: "16px", overflow: "hidden", background: "var(--bg-subtle)", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <img src={post.image} alt={(post as any).alt || post.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>

            <div className="markdown-body" style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--fg)" }}>
              <ReactMarkdown>{post.content}</ReactMarkdown>
            </div>

            <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="badge" style={{ background: "rgba(0,0,0,0.05)", color: "var(--fg-muted)" }}>#AI프롬프트</span>
                <span className="badge" style={{ background: "rgba(0,0,0,0.05)", color: "var(--fg-muted)" }}>#실무적용</span>
              </div>
              <button className="btn-outline" style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}>
                <Share2 size={16} /> 공유하기
              </button>
            </div>
          </article>
        </main>
      </div>
    </div>
  );
}
