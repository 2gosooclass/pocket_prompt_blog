import React from "react";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getPostBySlug, getAllPosts } from "../../../lib/mdx";
import styles from "../../page.module.css";
import Link from "next/link";
import { ArrowLeft, BookOpen, Clock, ArrowRight } from "lucide-react";

// Register custom MDX components here
import PromptBox from "../../../components/PromptBox";
import YoutubeEmbed from "../../../components/YoutubeEmbed";

const mdxComponents = {
  PromptBox,
  YoutubeEmbed,
};

export async function generateStaticParams() {
  const posts = getAllPosts("insights");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug("insights", resolvedParams.slug);
  if (!post) {
    return { title: "Not Found" };
  }
  return {
    title: `${post.metadata.title} | 2GOSOO AI Prompt Lab`,
    description: post.metadata.desc,
  };
}

export default async function InsightPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  const post = getPostBySlug("insights", resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Schema.org structure for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.metadata.title,
    "image": post.metadata.image,
    "datePublished": post.metadata.date,
    "description": post.metadata.desc,
    "author": {
      "@type": "Organization",
      "name": "2GOSOO AI Prompt Lab"
    }
  };

  return (
    <div className={styles.layout}>
      {/* Schema.org Injection */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <div style={{ maxWidth: "800px", margin: "0 auto", padding: "2rem 0" }}>
            <Link href="/insights" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--primary-400)", textDecoration: "none", marginBottom: "2rem", fontWeight: 500 }}>
              <ArrowLeft size={16} /> 목록으로 돌아가기
            </Link>

            <article>
              <header style={{ marginBottom: "3rem" }}>
                <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem" }}>
                  <span className="badge badge-primary">
                    <BookOpen size={12} style={{ marginRight: "4px" }} />
                    {post.metadata.category || '심층 블로그'}
                  </span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "var(--fg-subtle)", fontSize: "0.9rem" }}>
                    <Clock size={14} /> {post.metadata.date}
                  </span>
                </div>
                <h1 style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.3, marginBottom: "1.5rem", color: "var(--fg)", letterSpacing: "-0.02em" }}>
                  {post.metadata.title}
                </h1>
                <p style={{ fontSize: "1.2rem", color: "var(--fg-muted)", lineHeight: 1.6 }}>
                  {post.metadata.desc}
                </p>
              </header>

              {post.metadata.image && (
                <div style={{ width: "100%", height: "400px", position: "relative", marginBottom: "4rem", borderRadius: "24px", overflow: "hidden", border: "1px solid var(--border)" }}>
                  <img src={post.metadata.image} alt={post.metadata.title} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              )}

              <div className="mdx-content">
                <MDXRemote source={post.content} components={mdxComponents} />
              </div>
            </article>

            <div style={{ marginTop: "5rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", textAlign: "center" }}>
              <Link href="/insights" className="nav-link" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.75rem 1.5rem", background: "var(--bg-elevated)", borderRadius: "var(--radius-full)", border: "1px solid var(--border)", color: "var(--fg)" }}>
                더 많은 심층 글 보기 <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
