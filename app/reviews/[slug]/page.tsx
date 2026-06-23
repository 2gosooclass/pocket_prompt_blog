import React from "react";
import { notFound } from "next/navigation";
import { getPostBySlug, getPostSlugs } from "../../../lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import PromptBox from "../../../components/PromptBox";
import YoutubeEmbed from "../../../components/YoutubeEmbed";
import styles from "../../page.module.css";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const components = {
  PromptBox,
  YoutubeEmbed,
  img: (props: any) => (
    <span style={{ display: 'block', margin: '2rem 0', borderRadius: '16px', overflow: 'hidden' }}>
      <img {...props} style={{ width: '100%', height: 'auto', display: 'block' }} />
    </span>
  ),
};

export async function generateStaticParams() {
  const slugs = getPostSlugs("reviews");
  return slugs.map((slug) => ({ slug: slug.replace(/\.mdx$/, "") }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  try {
    const post = getPostBySlug("reviews", resolvedParams.slug);
    return {
      title: `${post.metadata.title} | 2GOSOO AI Prompt Lab`,
      description: post.metadata.desc,
      keywords: post.metadata.tags?.join(", "),
      openGraph: {
        title: post.metadata.title,
        description: post.metadata.desc,
        images: [{ url: post.metadata.image, alt: post.metadata.alt }],
      },
    };
  } catch (e) {
    return { title: "Post Not Found" };
  }
}

export default async function ReviewPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = await params;
  let post;
  try {
    post = getPostBySlug("reviews", resolvedParams.slug);
  } catch (e) {
    notFound();
  }

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer} style={{ maxWidth: "800px" }}>
        <div style={{ marginBottom: "2rem" }}>
          <Link href="/reviews" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", color: "var(--fg-muted)", textDecoration: "none", fontSize: "0.95rem" }}>
            <ArrowLeft size={16} /> 목록으로 돌아가기
          </Link>
        </div>
        
        <header style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem", flexWrap: "wrap" }}>
            {post.metadata.tags?.map(tag => (
              <span key={tag} className="badge badge-primary">{tag}</span>
            ))}
          </div>
          <h1 style={{ fontSize: "2.5rem", fontWeight: 800, lineHeight: 1.2, marginBottom: "1rem", letterSpacing: "-0.03em" }}>
            {post.metadata.title}
          </h1>
          <p style={{ fontSize: "1.1rem", color: "var(--fg-muted)", marginBottom: "1.5rem" }}>{post.metadata.desc}</p>
          <div style={{ fontSize: "0.9rem", color: "var(--fg-subtle)" }}>
            작성일: {post.metadata.date}
          </div>
        </header>

        <div style={{ width: "100%", borderRadius: "24px", overflow: "hidden", marginBottom: "3rem", background: "var(--bg-subtle)" }}>
          <img src={post.metadata.image} alt={post.metadata.alt} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>

        <article className="prose" style={{ lineHeight: 1.8, fontSize: "1.05rem", color: "var(--fg)" }}>
          <MDXRemote source={post.content} components={components} />
        </article>
      </div>
    </div>
  );
}
