"use client";

import React, { useState, useEffect } from "react";
import { Search, Flame, Clock, Bookmark, ArrowRight } from "lucide-react";
import styles from "./page.module.css";

interface Post {
  id: number;
  category: string;
  slug: string;
  title: string;
  desc: string;
  views: string;
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

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [activeCategory, setActiveCategory] = useState<string>("ALL");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("trending");

  const categories = [
    { key: "ALL", label: "전체" },
    { key: "영상 생성", label: "영상 생성" },
    { key: "이미지 생성", label: "이미지 생성" },
    { key: "콘텐츠 작성", label: "콘텐츠 작성" },
    { key: "업무 자동화", label: "업무 자동화" },
    { key: "Agent", label: "AI 에이전트" },
    { key: "VibeCoding", label: "바이브 코딩" },
  ];

  // Load posts database
  useEffect(() => {
    fetch("/data/posts_data.json")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        setFilteredPosts(data);
      })
      .catch((err) => console.error("Error loading posts database:", err));
  }, []);

  // Filter and sort posts dynamically
  useEffect(() => {
    let result = [...posts];

    // 1. Category Filter
    if (activeCategory !== "ALL") {
      result = result.filter((post) => post.category === activeCategory);
    }

    // 2. Search Query Filter
    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.desc.toLowerCase().includes(query)
      );
    }

    // 3. Sorting
    if (sortBy === "trending") {
      result.sort((a, b) => {
        const viewsStrA = a.views || "0";
        const viewsStrB = b.views || "0";
        const viewsA = parseFloat(viewsStrA) * (viewsStrA.includes("k") ? 1000 : 1);
        const viewsB = parseFloat(viewsStrB) * (viewsStrB.includes("k") ? 1000 : 1);
        return viewsB - viewsA;
      });
    } else if (sortBy === "latest") {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    setFilteredPosts(result);
  }, [posts, activeCategory, searchQuery, sortBy]);

  return (
    <div className={styles.layout}>

      {/* Main Container */}
      <div className={styles.mainContainer}>
        {/* Main Content */}
        <main className={styles.content}>
          <section className={styles.hero}>
            <h1 className="gradient-text">2GOSOO AI Prompt Lab</h1>
            <p>
              "무엇을 입력할지"보다 "무엇을 만들 수 있는지"를 먼저 보여줍니다.<br/>
              단순한 프롬프트 복사가 아닌, 검증된 압도적 결과물과 실무 적용 사례를 라이브러리에서 경험해 보세요.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: "1rem" }}>
              <div style={{ position: "relative", width: "100%", maxWidth: "500px" }}>
                <Search size={20} style={{ position: "absolute", left: "1rem", top: "50%", transform: "translateY(-50%)", color: "var(--fg-subtle)" }} />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="원하는 프롬프트를 검색해보세요 (예: 영문 이력서, 코드 리뷰)" 
                  style={{ width: "100%", padding: "1rem 1rem 1rem 3rem", borderRadius: "9999px", border: "1px solid var(--glass-border)", background: "var(--bg-elevated)", color: "var(--fg)", outline: "none", fontSize: "1rem" }}
                />
              </div>
            </div>
          </section>

          {/* Prompt Request CTA Banner */}
          <div style={{ marginBottom: "2rem", padding: "1.5rem", borderRadius: "1rem", background: "linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))", border: "1px solid rgba(99,102,241,0.2)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--primary-600)", marginBottom: "0.25rem" }}>원하는 프롬프트가 없나요?</h3>
              <p style={{ fontSize: "0.9rem", color: "var(--fg-subtle)" }}>원하시는 이미지, 영상, 혹은 업무 자동화 봇이 있다면 2GOSOO Lab에 직접 제작을 의뢰해 보세요!</p>
            </div>
            <a href="/request" className="btn-primary" style={{ padding: "0.6rem 1.2rem", textDecoration: "none", fontSize: "0.9rem", whiteSpace: "nowrap" }}>
              ✨ 맞춤형 프롬프트 의뢰하기
            </a>
          </div>

          {/* [TODO] 추후 구글 애드센스 승인 완료 후 여기에 인피드 광고(In-feed Ad) 코드 삽입 */}

          {/* Category Filter Tabs & Sort options */}
          <div className={styles.filterBar}>
            <div className={styles.tabsContainer}>
              {categories.map((cat) => (
                <button
                  key={cat.key}
                  onClick={() => setActiveCategory(cat.key)}
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

          {/* Cards Grid */}
          <div className={styles.feed}>
            {filteredPosts.length > 0 ? (
              filteredPosts.map((p, index) => (
                <React.Fragment key={p.id}>
                  {/* Insert In-feed Ad Placeholder after the 3rd post */}
                  {index === 3 && (
                    <div className={`${styles.card} glass-card`} style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(99, 102, 241, 0.05)", border: "1px dashed var(--primary-500)", minHeight: "250px" }}>
                      <div style={{ textAlign: "center", padding: "2rem" }}>
                        <span style={{ display: "block", fontWeight: 700, color: "var(--primary-600)", marginBottom: "0.5rem" }}></span>
                        <span style={{ fontSize: "0.8rem", color: "var(--fg-subtle)" }}></span>
                      </div>
                    </div>
                  )}
                  
                  <div className={`${styles.card} glass-card`}>
                    <div className={styles.cardImageWrapper}>
                      {p.youtubeId ? (
                        <img src={`https://img.youtube.com/vi/${p.youtubeId}/mqdefault.jpg`} alt={p.title} className={styles.cardImage} />
                      ) : (
                        <img src={p.image} alt={(p as any).alt || p.title} className={styles.cardImage} />
                      )}
                    </div>
                    <div className={styles.cardContent}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                        <span className={`badge badge-primary`}>{p.category}</span>
                        <span style={{ fontSize: "0.75rem", color: "var(--fg-subtle)" }}>{p.date}</span>
                      </div>
                      {p.verified && (
                        <div style={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                          <span style={{ fontSize: "0.75rem", fontWeight: 700, color: "#059669", background: "rgba(16, 185, 129, 0.1)", padding: "0.25rem 0.5rem", borderRadius: "12px", display: "inline-flex", alignItems: "center", gap: "0.25rem" }}>
                            💎 2GOSOO Lab 실무 검증 완료
                          </span>
                        </div>
                      )}
                      <a href={`/post/${p.id}`} style={{ textDecoration: "none", color: "inherit" }}>
                        <h3 className={styles.cardTitle}>{p.title}</h3>
                      </a>
                      <p className={styles.cardDesc}>{p.desc}</p>
                      <div style={{ marginTop: "1rem", display: "flex", flexWrap: "wrap", gap: "0.4rem" }}>
                        {p.tags?.slice(0, 3).map((tag: string, idx: number) => (
                          <span key={idx} style={{ fontSize: "0.7rem", background: "rgba(0,0,0,0.05)", padding: "0.2rem 0.5rem", borderRadius: "12px", color: "var(--fg-muted)" }}>#{tag}</span>
                        ))}
                      </div>
                      <div style={{ marginTop: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.85rem", color: "var(--fg-subtle)", borderTop: "1px solid var(--border)", paddingTop: "0.75rem" }}>
                        <span><i className="fa-regular fa-eye"></i> {p.views}</span>
                        <span><i className="fa-regular fa-clock"></i> {p.time}</span>
                      </div>
                    </div>
                  </div>
                </React.Fragment>
              ))
            ) : (
              <div style={{ gridColumn: "1 / -1", textAlign: "center", padding: "3rem", color: "var(--fg-muted)" }}>
                검색 조건에 맞는 프롬프트 튜토리얼이 없습니다.
              </div>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
