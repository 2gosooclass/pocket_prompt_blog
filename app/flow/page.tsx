"use client";

import React, { useState, useEffect } from "react";
import styles from "../page.module.css";
import { Copy, CheckCircle, Image as ImageIcon, Video, ArrowRight, Wand2, PlayCircle } from "lucide-react";

type FlowItem = {
  title: string;
  asset: string;
  prompt: string;
  camera: string;
  lighting: string;
  youtubeId?: string;
  imageUrl?: string;
};

type FlowCategory = {
  category: string;
  items: FlowItem[];
};

export default function FlowPage() {
  const [data, setData] = useState<FlowCategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch("/data/flow_data.json")
      .then((res) => res.json())
      .then((json) => setData(json))
      .catch((err) => console.error("Error loading flow data:", err));
  }, []);

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  if (data.length === 0) return <div className={styles.layout}><div style={{textAlign: "center", padding: "5rem"}}>Loading...</div></div>;

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <section className={styles.hero} style={{ marginBottom: "3rem", textAlign: "center" }}>
            <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "rgba(168, 85, 247, 0.15)", color: "#c084fc", padding: "0.5rem 1rem", borderRadius: "var(--radius-full)", fontWeight: 600, marginBottom: "1.5rem" }}>
              <Wand2 size={18} /> Google Flow (Omni) & Luma, Kling
            </div>
            <h1 className="gradient-text" style={{ fontSize: "3.5rem", marginBottom: "1rem" }}>
              VVIP 하이엔드 커스텀 영상 템플릿
            </h1>
            <p style={{ fontSize: "1.2rem", maxWidth: "800px", margin: "0 auto", color: "var(--fg-muted)", lineHeight: 1.6 }}>
              대표님의 평범한 제품 사진이나 본인 얼굴을 먼저 업로드하세요.<br/>
              단 1%만 아는 <strong>프리미엄 마스터 프롬프트</strong>를 결합하면 할리우드급 광고 영상으로 재탄생합니다.
            </p>
            
            {/* 2-Step Process Visualizer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "2rem", marginTop: "3rem", flexWrap: "wrap" }}>
              <div className="glass-card" style={{ padding: "2rem", textAlign: "center", width: "280px" }}>
                <div style={{ background: "var(--bg-subtle)", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "var(--primary)" }}>
                  <ImageIcon size={40} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", fontWeight: 700 }}>Step 1: 내 이미지 업로드</h3>
                <p style={{ color: "var(--fg-subtle)", fontSize: "0.95rem" }}>내 제품이나 캐릭터 사진을 AI에 먼저 올립니다.</p>
              </div>
              <ArrowRight size={32} style={{ color: "var(--border)" }} />
              <div className="glass-card" style={{ padding: "2rem", textAlign: "center", width: "280px" }}>
                <div style={{ background: "var(--bg-subtle)", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "#c084fc" }}>
                  <Wand2 size={40} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", fontWeight: 700 }}>Step 2: 마스터 프롬프트</h3>
                <p style={{ color: "var(--fg-subtle)", fontSize: "0.95rem" }}>아래 제공된 프롬프트에 내 이미지 키워드를 넣습니다.</p>
              </div>
              <ArrowRight size={32} style={{ color: "var(--border)" }} />
              <div className="glass-card" style={{ padding: "2rem", textAlign: "center", width: "280px", borderColor: "var(--primary)" }}>
                <div style={{ background: "rgba(59, 130, 246, 0.2)", width: "80px", height: "80px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem", color: "var(--primary)" }}>
                  <PlayCircle size={40} />
                </div>
                <h3 style={{ fontSize: "1.25rem", marginBottom: "0.5rem", fontWeight: 700 }}>Step 3: 유튜브 숏츠 완성</h3>
                <p style={{ color: "var(--fg-subtle)", fontSize: "0.95rem" }}>할리우드급 하이엔드 영상이 즉시 생성됩니다.</p>
              </div>
            </div>
          </section>

          {/* Category Tabs */}
          <div style={{ display: "flex", gap: "1rem", overflowX: "auto", paddingBottom: "1rem", marginBottom: "2rem", borderBottom: "1px solid var(--border)" }}>
            {data.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(idx)}
                style={{
                  padding: "0.75rem 1.5rem",
                  background: activeCategory === idx ? "var(--primary)" : "transparent",
                  color: activeCategory === idx ? "white" : "var(--fg)",
                  border: "none",
                  borderRadius: "var(--radius-full)",
                  fontWeight: 600,
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                  transition: "all var(--transition-base)"
                }}
              >
                {cat.category}
              </button>
            ))}
          </div>

          {/* Prompt List */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "2rem" }}>
            {data[activeCategory].items.map((item, index) => {
              const fullPrompt = `Prompt: ${item.prompt}\nCamera: ${item.camera}\nLighting: ${item.lighting}`;
              
              return (
                <div key={index} className="glass-card" style={{ padding: "2rem", display: "grid", gridTemplateColumns: item.youtubeId ? "1fr 280px" : "1fr", gap: "2rem" }}>
                  <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                    <div style={{ borderBottom: "1px solid var(--border)", paddingBottom: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                      <div>
                        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--fg)" }}>{item.title}</h2>
                        <p style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: "var(--bg-subtle)", padding: "0.5rem 1rem", borderRadius: "8px", color: "var(--fg-muted)", fontSize: "0.95rem" }}>
                          교체 키워드: <strong style={{ color: "var(--primary)" }}>{item.asset}</strong>
                        </p>
                      </div>
                      <button 
                        onClick={() => handleCopy(fullPrompt, index)}
                        className="btn-primary"
                        style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.6rem 1.2rem", border: "none" }}
                      >
                        {copiedIndex === index ? <CheckCircle size={18} /> : <Copy size={18} />}
                        {copiedIndex === index ? "복사됨!" : "프롬프트 복사"}
                      </button>
                    </div>
                    
                    <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
                      <div style={{ background: "rgba(0,0,0,0.3)", padding: "1.25rem", borderRadius: "12px", border: "1px solid var(--border)" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--primary)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", display: "block" }}>🎯 메인 액션</span>
                        <p style={{ color: "var(--fg)", lineHeight: 1.6, fontSize: "1.05rem" }}>
                          {item.prompt.split(item.asset).map((part, i, arr) => (
                            <React.Fragment key={i}>
                              {part}
                              {i < arr.length - 1 && (
                                <span style={{ background: "var(--primary)", color: "white", padding: "0.2rem 0.4rem", borderRadius: "4px", margin: "0 0.2rem", fontWeight: 700 }}>
                                  {item.asset}
                                </span>
                              )}
                            </React.Fragment>
                          ))}
                        </p>
                      </div>
                      
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.2rem" }}>
                        <div style={{ background: "var(--bg-subtle)", padding: "1.25rem", borderRadius: "12px" }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#c084fc", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", display: "block" }}>🎥 카메라 무빙</span>
                          <p style={{ color: "var(--fg-muted)", lineHeight: 1.5, fontSize: "0.95rem" }}>{item.camera}</p>
                        </div>
                        <div style={{ background: "var(--bg-subtle)", padding: "1.25rem", borderRadius: "12px" }}>
                          <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#facc15", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem", display: "block" }}>💡 조명 및 톤</span>
                          <p style={{ color: "var(--fg-muted)", lineHeight: 1.5, fontSize: "0.95rem" }}>{item.lighting}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* YouTube Embed Area */}
                  {item.youtubeId && (
                    <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
                      <div style={{ width: "100%", aspectRatio: "9/16", borderRadius: "16px", overflow: "hidden", background: "#000", border: "1px solid var(--border)", position: "relative" }}>
                        <iframe
                          width="100%"
                          height="100%"
                          src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=0&loop=1&playlist=${item.youtubeId}&mute=1`}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
                        ></iframe>
                      </div>
                      <div style={{ textAlign: "center", marginTop: "0.75rem", fontSize: "0.85rem", color: "var(--fg-subtle)" }}>
                        ▶️ 실제 생성 결과물
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
}
