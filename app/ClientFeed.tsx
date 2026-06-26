"use client";

import React, { useState, useEffect, Suspense, useMemo } from "react";
import { Search, Flame, Clock, Bookmark, ArrowRight } from "lucide-react";
import styles from "./page.module.css";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

interface Post {
  id: number;
  category: string;
  slug: string;
  title: string;
  desc: string;
  views: string | number;
  time: string;
  date: string;
  image: string;
  prompt_text: string;
  prompt_kr: string;
  content: string;
  verified?: boolean;
  warning?: boolean;
  youtubeId?: string;
  tags?: string[];
}

function FeedInner({ initialPosts }: { initialPosts: Post[] }) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const searchParams = useSearchParams();
  
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("trending");

  const categories = [
    { key: "ALL", label: "전체" },
    { key: "영상 생성", label: "영상 생성" },
    { key: "이미지 생성", label: "이미지 생성" },
    { key: "콘텐츠 작성", label: "콘텐츠 작성" },
    { key: "업무 자동화", label: "업무 자동화" },
    { key: "AI 에이전트", label: "AI 에이전트" },
    { key: "바이브 코딩", label: "바이브 코딩" },
  ];

  // Sync with URL parameter exactly once on mount or when URL changes externally
  useEffect(() => {
    const cat = searchParams.get("category");
    if (cat && categories.some(c => c.key === cat)) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const filteredPosts = useMemo(() => {
    let result = [...posts];

    const now = new Date();
    result = result.filter(post => {
      if (!post.date) return true;
      const postDate = new Date(post.date);
      return isNaN(postDate.getTime()) || postDate <= now;
    });

    if (activeCategory !== "ALL") {
      result = result.filter((post) => post.category === activeCategory);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.desc.toLowerCase().includes(query)
      );
    }

    if (sortBy === "trending") {
      result.sort((a, b) => {
        const viewsStrA = String(a.views || "0");
        const viewsStrB = String(b.views || "0");
        const viewsA = parseFloat(viewsStrA) * (viewsStrA.includes("k") ? 1000 : 1);
        const viewsB = parseFloat(viewsStrB) * (viewsStrB.includes("k") ? 1000 : 1);
        return viewsB - viewsA;
      });
    } else if (sortBy === "latest") {
      result.sort((a, b) => {
        const dateA = new Date(a.date).getTime() || 0;
        const dateB = new Date(b.date).getTime() || 0;
        return dateB - dateA;
      });
    }

    return result;
  }, [posts, activeCategory, searchQuery, sortBy]);

  const handleCategoryClick = (catKey: string) => {
    setActiveCategory(catKey);
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (catKey === "ALL") {
        url.searchParams.delete("category");
      } else {
        url.searchParams.set("category", catKey);
      }
      window.history.replaceState({}, '', url);
    }
  };

  return (
    <>
      <section className={styles.hero}>
        <h1 className="gradient-text">2GOSOO AI Prompt Lab</h1>
        <p>
          "무엇을 입력할지"보다 "무엇을 만들 수 있는지"를 먼저 보여줍니다.
          <br />
          단순한 프롬프트 복사가 아닌, 검증된 압도적 결과물과 실무 적용
          사례를 라이브러리에서 경험해 보세요.
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
            <Search
              size={20}
              style={{
                position: "absolute",
                left: "1rem",
                top: "50%",
                transform: "translateY(-50%)",
                color: "var(--fg-subtle)",
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="원하는 프롬프트를 검색해보세요"
              style={{
                width: "100%",
                padding: "1rem 1rem 1rem 3rem",
                borderRadius: "9999px",
                border: "1px solid var(--glass-border)",
                background: "var(--bg-elevated)",
                color: "var(--fg)",
                outline: "none",
                fontSize: "1rem",
              }}
            />
          </div>
        </div>
      </section>

      <div className={styles.filterBar}>
        <div className={styles.tabsContainer}>
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => handleCategoryClick(cat.key)}
              className={`${styles.tabButton} ${activeCategory === cat.key ? styles.tabActive : ""}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className={styles.sortContainer}>
          <button
            onClick={() => setSortBy("trending")}
            className={`${styles.sortButton} ${sortBy === "trending" ? styles.sortActive : ""}`}
          >
            <Flame size={16} /> 인기순
          </button>
          <button
            onClick={() => setSortBy("latest")}
            className={`${styles.sortButton} ${sortBy === "latest" ? styles.sortActive : ""}`}
          >
            <Clock size={16} /> 최신순
          </button>
        </div>
      </div>

      <div key={`${activeCategory}-${sortBy}-${searchQuery}`} className={styles.feed}>
        {filteredPosts.length > 0 ? (
          filteredPosts.map((p, index) => (
            <React.Fragment key={p.id}>
              <div className={`${styles.card} glass-card ${styles.animatedCard}`} style={{ animationDelay: `${index * 0.05}s` }}>
                <Link href={`/post/${p.id}`} style={{ display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", height: "100%" }}>
                  <div className={styles.cardImageWrapper}>
                    {p.youtubeId ? (
                      <img 
                        src={`https://img.youtube.com/vi/${p.youtubeId}/maxresdefault.jpg`} 
                        alt={p.title} 
                        className={styles.cardImage} 
                        onError={(e) => { e.currentTarget.src = "/images/youtube_broll.png" }}
                      />
                    ) : (
                      <img src={p.image} alt={(p as any).alt || p.title} className={styles.cardImage} />
                    )}
                  </div>
                  <div className={styles.cardContent}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span className="badge badge-primary">{p.category}</span>
                      <span style={{ fontSize: "0.75rem", color: "var(--fg-subtle)" }}>{p.date}</span>
                    </div>
                    {p.verified && (
                      <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                        <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#059669", background: "rgba(16, 185, 129, 0.1)", padding: "0.25rem 0.5rem", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                          💎 실무 검증 완료
                        </span>
                      </div>
                    )}
                    <h3 className={styles.cardTitle}>{p.title}</h3>
                    <p className={styles.cardDesc}>{p.desc}</p>
                    <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                      {p.tags?.slice(0, 3).map((tag: string, idx: number) => (
                        <span key={idx} style={{ fontSize: "0.7rem", background: "rgba(0,0,0,0.05)", padding: "0.2rem 0.5rem", borderRadius: "12px", color: "var(--fg-muted)" }}>
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              </div>
            </React.Fragment>
          ))
        ) : (
          <div className={styles.animatedCard} style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--fg-muted)" }}>
            검색 조건에 맞는 프롬프트 튜토리얼이 없습니다.
          </div>
        )}
      </div>
    </>
  );
}

export default function ClientFeed({ initialPosts }: { initialPosts: Post[] }) {
  return (
    <Suspense fallback={
      <div style={{ padding: "2rem", textAlign: "center" }}>Loading Content...</div>
    }>
      <FeedInner initialPosts={initialPosts} />
    </Suspense>
  );
}
