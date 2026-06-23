import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export type PostMetadata = {
  title: string;
  desc: string;
  date: string;
  image: string;
  alt: string;
  tags: string[];
};

export type PostData = {
  slug: string;
  metadata: PostMetadata;
  content: string;
};

const contentDirectory = path.join(process.cwd(), 'content');

export function getPostSlugs(category: string) {
  const dirPath = path.join(contentDirectory, category);
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath).filter(file => file.endsWith('.mdx'));
}

export function getPostBySlug(category: string, slug: string): PostData {
  const realSlug = slug.replace(/\.mdx$/, '');
  const fullPath = path.join(contentDirectory, category, `${realSlug}.mdx`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  const { data, content } = matter(fileContents);

  return {
    slug: realSlug,
    metadata: data as PostMetadata,
    content,
  };
}

export function getAllPosts(category: string): PostData[] {
  const slugs = getPostSlugs(category);
  const posts = slugs
    .map((slug) => getPostBySlug(category, slug))
    .sort((post1, post2) => {
       const date1 = post1.metadata.date || '1970-01-01';
       const date2 = post2.metadata.date || '1970-01-01';
       return (date1 > date2 ? -1 : 1);
    });
  return posts;
}
