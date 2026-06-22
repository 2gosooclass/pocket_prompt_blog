import { ChevronLeft, ThumbsUp, List } from "lucide-react";
import Link from "next/link";
import styles from "./page.module.css";
import CopyButton from "./CopyButton";
import postsData from "../../../public/data/posts_data.json";

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
  content: string;
  prompt_text?: string;
  prompt_kr?: string;
  verified?: boolean;
  warning?: boolean;
  youtubeId?: string;
  tags?: string[];
  alt?: string;
}

import type { Metadata } from "next";

// Next.js static export requires generateStaticParams for dynamic routes
export function generateStaticParams() {
  return postsData.map((post) => ({
    id: post.id.toString(),
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);
  const post = (postsData as Post[]).find((p) => p.id === postId);

  if (!post) {
    return {
      title: "포스트를 찾을 수 없습니다",
    };
  }

  return {
    title: post.title,
    description: post.desc,
    openGraph: {
      title: post.title,
      description: post.desc,
      url: `https://2gosooaipromptlab.com/post/${post.id}`,
      type: "article",
      images: [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.desc,
      images: [post.image],
    },
  };
}

export default async function PostDetail({ params }: PageProps) {
  const resolvedParams = await params;
  const postId = parseInt(resolvedParams.id);
  const post = (postsData as Post[]).find((p) => p.id === postId);

  if (!post) {
    return (
      <div style={{ textAlign: "center", padding: "5rem" }}>
        <h2>존재하지 않는 포스트입니다.</h2>
        <Link
          href="/"
          style={{ color: "var(--accent)", textDecoration: "underline" }}
        >
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  // Highlight variables like {{Variable}} or [VARIABLE]
  const highlightVariables = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\{\{[^}]+\}\}|\[[A-Z\s_]+\])/g);
    return parts.map((part, i) => {
      if (part.match(/^(\{\{[^}]+\}\}|\[[A-Z\s_]+\])$/)) {
        return (
          <span
            key={i}
            style={{
              color: "var(--accent-1)",
              fontWeight: 700,
              backgroundColor: "rgba(100,102,241,0.15)",
              padding: "2px 6px",
              borderRadius: "4px",
            }}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  // Extract TOC
  const toc: { text: string; level: number; id: string }[] = [];
  let headerIndex = 0;
  if (post.content) {
    const parts = post.content.split("```");
    parts.forEach((part, index) => {
      if (index % 2 === 0) {
        part.split("\n").forEach((line) => {
          const trimmed = line.trim();
          const stripEmojis = (str: string) =>
            str
              .replace(
                /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/gu,
                "",
              )
              .trim();

          if (trimmed.startsWith("###")) {
            toc.push({
              text: stripEmojis(trimmed.replace("###", "")),
              level: 3,
              id: `h-${headerIndex++}`,
            });
          } else if (trimmed.startsWith("##")) {
            toc.push({
              text: stripEmojis(trimmed.replace("##", "")),
              level: 2,
              id: `h-${headerIndex++}`,
            });
          }
        });
      }
    });
  }

  // Parse markdown-like content to HTML elements with copyable boxes
  let idCounter = 0;

  const parseBold = (text: string) => {
    if (!text) return null;
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) {
        return (
          <strong key={i} style={{ color: "var(--fg)" }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });
  };

  const renderContent = (content: string) => {
    if (!content) return null;

    const parts = content.split("```");
    return parts.map((part, index) => {
      // Odd index is code block
      if (index % 2 === 1) {
        const lines = part.split("\n");
        let codeText = part.trim();

        // Remove code block language label if present (e.g. html, js, text)
        if (
          lines[0] &&
          lines[0].length < 10 &&
          !/[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(lines[0])
        ) {
          codeText = lines.slice(1).join("\n").trim();
        }

        return (
          <div
            key={index}
            className={styles.promptBox}
            style={{ marginBottom: "80px" }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "0.75rem",
              }}
            >
              <span
                style={{
                  fontSize: "0.75rem",
                  color: "var(--fg-subtle)",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                PROMPT TEMPLATE
              </span>
              <CopyButton textToCopy={codeText} />
            </div>
            <pre
              style={{
                margin: 0,
                whiteSpace: "pre-wrap",
                wordBreak: "break-all",
                fontFamily: "var(--font-mono)",
                fontSize: "0.85rem",
                color: "var(--fg-muted)",
                background: "rgba(0,0,0,0.03)",
                padding: "1rem",
                borderRadius: "8px",
              }}
            >
              {highlightVariables(codeText)}
            </pre>
          </div>
        );
      }

      // Even index is plain text
      return (
        <div key={index}>
          {part.split("\n").map((line, lineIndex) => {
            let trimmed = line.trim();
            if (!trimmed) return null;

            if (trimmed.startsWith("###")) {
              const text = trimmed.replace("###", "").trim();
              return (
                <h3
                  id={`h-${idCounter++}`}
                  key={lineIndex}
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    marginTop: "1.5rem",
                    marginBottom: "0.75rem",
                    color: "var(--fg)",
                  }}
                >
                  {parseBold(text)}
                </h3>
              );
            }
            if (trimmed.startsWith("##")) {
              const text = trimmed.replace("##", "").trim();
              return (
                <h2
                  id={`h-${idCounter++}`}
                  key={lineIndex}
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: 700,
                    marginTop: "2rem",
                    marginBottom: "1rem",
                    color: "var(--primary-600)",
                    borderBottom: "1.5px solid var(--border)",
                    paddingBottom: "0.5rem",
                  }}
                >
                  {parseBold(text)}
                </h2>
              );
            }
            if (trimmed.startsWith("-") || trimmed.startsWith("*")) {
              const text = trimmed.substring(1).trim();
              return (
                <li
                  key={lineIndex}
                  style={{
                    marginLeft: "1.25rem",
                    marginBottom: "0.35rem",
                    color: "var(--fg-muted)",
                  }}
                >
                  {parseBold(text)}
                </li>
              );
            }
            if (trimmed.startsWith("⚠️")) {
              const text = trimmed.replace("⚠️", "").trim();
              return (
                <p
                  key={lineIndex}
                  style={{
                    marginBottom: "1rem",
                    color: "#b91c1c",
                    background: "rgba(239, 68, 68, 0.05)",
                    padding: "0.75rem 1rem",
                    borderRadius: "6px",
                    borderLeft: "4px solid #ef4444",
                  }}
                >
                  {parseBold(text)}
                </p>
              );
            }
            if (trimmed.startsWith("Q.")) {
              return (
                <p
                  key={lineIndex}
                  style={{
                    marginBottom: "0.25rem",
                    fontWeight: 700,
                    color: "var(--fg)",
                    marginTop: "1rem",
                  }}
                >
                  {parseBold(trimmed)}
                </p>
              );
            }
            if (trimmed.startsWith("A.")) {
              return (
                <p
                  key={lineIndex}
                  style={{
                    marginBottom: "1rem",
                    color: "var(--fg-muted)",
                    borderBottom: "1px dashed var(--border)",
                    paddingBottom: "0.75rem",
                  }}
                >
                  {parseBold(trimmed)}
                </p>
              );
            }

            return (
              <p
                key={lineIndex}
                style={{ marginBottom: "1rem", color: "var(--fg-muted)" }}
              >
                {parseBold(trimmed)}
              </p>
            );
          })}
        </div>
      );
    });
  };

  return (
    <div className={styles.layoutContainer}>
      <div
        className="container"
        style={{ marginTop: "2rem", padding: "0 1.5rem" }}
      >
        <Link href="/" className={styles.backBtn}>
          <ChevronLeft size={20} /> 돌아가기
        </Link>
      </div>

      <main className={`${styles.main} container`}>
        <article className={`${styles.article} glass-card`}>
          <div className={styles.header}>
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                alignItems: "center",
                marginBottom: "1rem",
              }}
            >
              <span
                className={`badge badge-${(post.category || "default").toLowerCase()}`}
              >
                {post.category || "Uncategorized"}
              </span>
              {post.verified && (
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontWeight: 700,
                    color: "#059669",
                    background: "rgba(16, 185, 129, 0.1)",
                    padding: "0.25rem 0.6rem",
                    borderRadius: "12px",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.25rem",
                  }}
                >
                  2GOSOO Lab 실무 검증 완료
                </span>
              )}
            </div>
            <h1 className={styles.title}>{post.title}</h1>
            <div className={styles.meta}>
              <span>작성: 2GOSOO AI LAB</span>
              <span>•</span>

              <span>•</span>
              <span>날짜: {post.date}</span>
            </div>
            {/* TAGS */}
            {(post as any).tags && (
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "0.5rem",
                  marginTop: "1rem",
                }}
              >
                {(post as any).tags.map((tag: string, idx: number) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: "0.8rem",
                      background: "rgba(0,0,0,0.05)",
                      padding: "0.3rem 0.8rem",
                      borderRadius: "20px",
                      color: "var(--fg-muted)",
                      fontWeight: 600,
                    }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </div>

          {post.youtubeId ? (
            <div
              style={{
                marginTop: "1.5rem",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--glass-shadow)",
                display: "flex",
                justifyContent: "center",
                background: "#000",
              }}
            >
              <iframe
                style={{
                  width: "100%",
                  maxWidth: "400px",
                  aspectRatio: "9/16",
                  border: 0,
                }}
                src={`https://www.youtube.com/embed/${post.youtubeId}?rel=0`}
                title="YouTube Shorts player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ) : (
            <div
              style={{
                marginTop: "1.5rem",
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "var(--glass-shadow)",
              }}
            >
              <img
                src={post.image}
                alt={post.alt || post.title}
                style={{
                  width: "100%",
                  maxHeight: "500px",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </div>
          )}

          {/* [TODO] 추후 애드센스 승인 후 여기에 상단 배너 광고() 삽입 */}

          <div className={styles.contentBody}>
            {renderContent(post.content)}
          </div>

          <div style={{ marginTop: "3rem" }}>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                marginBottom: "1.5rem",
                color: "var(--fg)",
              }}
            >
              원본 프롬프트
            </h2>

            <div className={styles.promptBox} style={{ marginBottom: "80px" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--fg-subtle)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  ENGLISH PROMPT
                </span>
                <CopyButton textToCopy={post.prompt_text || ""} />
              </div>
              <pre
                style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--fg-muted)",
                  background: "rgba(0,0,0,0.03)",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                {highlightVariables(post.prompt_text || "")}
              </pre>
            </div>

            <div
              className={styles.promptBox}
              style={{ marginTop: "1.5rem", marginBottom: "80px" }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.75rem",
                    color: "var(--fg-subtle)",
                    fontWeight: 700,
                    letterSpacing: "0.05em",
                  }}
                >
                  KOREAN TRANSLATION
                </span>
                <CopyButton textToCopy={post.prompt_kr || ""} />
              </div>
              <pre
                style={{
                  margin: 0,
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-all",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.85rem",
                  color: "var(--fg-muted)",
                  background: "rgba(0,0,0,0.03)",
                  padding: "1rem",
                  borderRadius: "8px",
                }}
              >
                {highlightVariables(post.prompt_kr || "")}
              </pre>
            </div>
          </div>

          {/* In-article Ad Placeholder */}
          <div
            className={styles.adPlaceholder}
            style={{ margin: "3rem 0", height: "120px" }}
          >
            <span style={{ fontWeight: 600 }}>In-Article Ad</span>
            <span style={{ fontSize: "0.8rem" }}></span>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "1rem",
              padding: "2rem 0",
              borderTop: "1px solid var(--border)",
            }}
          >
            <button
              className="btn-primary"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.85rem 1.75rem",
                fontSize: "1rem",
              }}
            >
              이 프롬프트가 도움이 되었나요?
            </button>
          </div>

          {/* Related Posts (Bottom 릴레이) */}
          <div className={styles.relatedContainer}>
            <h2
              style={{
                fontSize: "1.4rem",
                fontWeight: 700,
                color: "var(--fg)",
              }}
            >
              비슷한 검증된 프롬프트 추천
            </h2>
            <div className={styles.relatedGrid}>
              {postsData
                .filter((p) => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/post/${p.id}`}
                    className={`${styles.card} glass-card`}
                  >
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        height: "140px",
                        objectFit: "cover",
                        borderTopLeftRadius: "16px",
                        borderTopRightRadius: "16px",
                      }}
                    />
                    <div style={{ padding: "1rem" }}>
                      <span
                        className={`badge badge-${(p.category || "default").toLowerCase()}`}
                        style={{
                          fontSize: "0.6rem",
                          marginBottom: "0.5rem",
                          display: "inline-block",
                        }}
                      >
                        {p.category || "Uncategorized"}
                      </span>
                      <h4
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--fg)",
                          lineHeight: 1.3,
                        }}
                      >
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </article>

        {/* Detail Sidebar */}
        <aside className={styles.sidebar}>
          {toc.length > 0 && (
            <div className={styles.tocContainer}>
              <h3 className={styles.tocTitle}>목차</h3>
              <ul className={styles.tocList}>
                {toc.map((item, idx) => (
                  <li
                    key={idx}
                    className={`${styles.tocItem} ${item.level === 3 ? styles.tocItemH3 : ""}`}
                  >
                    <a
                      href={`#${item.id}`}
                      style={{
                        color: "inherit",
                        textDecoration: "none",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.4rem",
                      }}
                    >
                      <span
                        style={{
                          color: "var(--primary-500)",
                          fontWeight: "bold",
                        }}
                      >
                        •
                      </span>
                      <span>{item.text}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/*  Placeholder */}
          <div
            className={styles.adPlaceholder}
            style={{ height: "600px", marginTop: "0" }}
          >
            <span style={{ fontWeight: 600 }}></span>
            <span>300 x 600</span>
            <span style={{ fontSize: "0.7rem", marginTop: "0.5rem" }}></span>
          </div>
        </aside>
      </main>
    </div>
  );
}
