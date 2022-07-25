/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  const basePath = 'posts/posts'
  const posts = [];

  const getPathPosts = (path) => {
    const files = fs.readdirSync(path);
    files.forEach((fileName) => {
      if (fileName.endsWith(".md")) {
        const rootPath = path.startsWith("posts/") ? (path.replace("posts/", "")) : (path.replace("posts", ""))
        const filePath = `${path}/${fileName}`;
        const slug = `${rootPath.replace(/\//g, "_",)}${rootPath ? "_" : ""}${fileName.replace('.md', '')}`;
        const readFile = fs.readFileSync(filePath, 'utf-8');
        let lastModified = fs.statSync(filePath).mtime;
        lastModified = `${lastModified.getFullYear()}-${(lastModified.getMonth()+1).toString().padStart(2,'0')}-${lastModified.getDate().toString().padStart(2,'0')}`;
        const { data: frontmatter } = matter(readFile);
        if (!frontmatter.draft) // 草稿不顯示
          posts.push({
            slug,
            frontmatter,
            lastModified,
          });
      } else {
        getPathPosts(`${path}/${fileName}`)
      }
    })
  }

  getPathPosts(basePath);
  return { props: { posts } };
}

export default function Post({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter,lastModified }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-xl overflow-hidden flex flex-col'
        >
          <Link href={`post/${slug}`}>
            <a>
              <img
                width={650}
                height={340}
                alt={frontmatter.title}
                src={frontmatter.coverImage || "https://images.unsplash.com/photo-1657477612554-ff8f28dd15e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
              />
              <div className='p-4'>
                <h1>{frontmatter.title}</h1>
                <small>{frontmatter.date}</small>
                <small className='text-gray-300'>{`（最後更新：${lastModified}）`}</small>
                <div className='flex flex-wrap'>
                  {frontmatter.tags.toString().split(',').map((tag, index) => (<>
                    <small className={`text-gray-400 px-2 py-1 block mt-1.5 border rounded-[8px] ${index !== frontmatter.tags.length - 1 ? "mr-1" : ''}`}>{tag}</small>
                  </>))}
                </div>
              </div>

            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
