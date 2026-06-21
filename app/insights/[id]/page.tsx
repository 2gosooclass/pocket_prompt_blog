"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Share2 } from "lucide-react";
import styles from "../../page.module.css";

// This is a temporary template for the Insights posts
export default function InsightPostPage({ params }: { params: { id: string } }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
              <span className="badge badge-primary" style={{ marginBottom: "1rem" }}>심층 블로그</span>
              <h1 style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "1rem", letterSpacing: "-0.02em", color: "var(--fg)" }}>
                인사이트 상세 페이지 준비 중입니다 (ID: {params.id})
              </h1>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem", color: "var(--fg-subtle)", fontSize: "0.95rem" }}>
                <span>작성: 2GOSOO AI LAB</span>
                <span>•</span>
                <span>시간: 5 min read</span>
                <span>•</span>
                <span>날짜: 2026-06-20</span>
              </div>
            </div>

            <div style={{ width: "100%", height: "400px", borderRadius: "16px", background: "var(--bg-subtle)", marginBottom: "3rem", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span style={{ color: "var(--fg-muted)" }}>[대표 이미지 자리]</span>
            </div>

            <div style={{ fontSize: "1.1rem", lineHeight: 1.8, color: "var(--fg-muted)", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
              <p>
                현재 구글 애드센스 승인 및 정식 오픈을 위해 사이트를 대대적으로 정비하고 있습니다. 
                이 페이지는 심층 블로그(Insights) 포스트가 클릭되었을 때 노출되는 임시 템플릿입니다.
              </p>
              <p>
                조만간 <strong>검증된 완벽한 프롬프트 엔지니어링 실무 가이드</strong>가 이곳을 가득 채울 예정입니다.
              </p>
              
              <div style={{ padding: "2rem", background: "var(--bg-elevated)", borderRadius: "12px", border: "1px solid var(--border)", marginTop: "1rem" }}>
                <h3 style={{ fontSize: "1.3rem", color: "var(--fg-default)", marginBottom: "1rem" }}>📝 예정된 콘텐츠 목차</h3>
                <ul style={{ paddingLeft: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <li>실제 비즈니스에 적용 가능한 마케팅 프롬프트 파이프라인</li>
                  <li>개발자를 위한 코드 리뷰 & 리팩토링 자동화 전략</li>
                  <li>기획 문서 초안을 1분 만에 완성하는 마법의 프롬프트</li>
                </ul>
              </div>
            </div>

            <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                <span className="badge" style={{ background: "rgba(0,0,0,0.05)", color: "var(--fg-muted)" }}>#준비중</span>
                <span className="badge" style={{ background: "rgba(0,0,0,0.05)", color: "var(--fg-muted)" }}>#AI블로그</span>
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
