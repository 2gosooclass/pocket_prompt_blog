import React from "react";
import styles from "./page.module.css";
import ClientFeed from "./ClientFeed";
import fs from "fs";
import path from "path";

async function getPosts() {
  try {
    const filePath = path.join(process.cwd(), "public", "data", "posts_data.json");
    const fileContents = fs.readFileSync(filePath, "utf8");
    return JSON.parse(fileContents);
  } catch (error) {
    console.error("Failed to read posts_data.json:", error);
    return [];
  }
}

export default async function Home() {
  const initialPosts = await getPosts();

  return (
    <div className={styles.layout}>
      <div className={styles.mainContainer}>
        <main className={styles.content}>
          <ClientFeed initialPosts={initialPosts} />
        </main>
      </div>
    </div>
  );
}
