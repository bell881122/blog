/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';
import React from 'react';

export async function getStaticProps() {
  const files = fs.readdirSync('posts');

  const posts = files.map((fileName) => {
    const slug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      posts,
    },
  };
}

export default function Post({ posts }) {
  React.useEffect(() => {
    console.log(posts);
  }, [posts])

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.map(({ slug, frontmatter }) => (
        <div
          key={slug}
          className='border border-gray-200 m-2 rounded-xl shadow-xl overflow-hidden flex flex-col'
        >
          <Link href={`/post/${slug}`}>
            <a>
              <img
                width={650}
                height={340}
                alt={frontmatter.title}
                src={frontmatter.coverImage}
              />
              <div className='p-4'>
                <h1>{frontmatter.title}</h1>
                <small>{frontmatter.date}</small>
              </div>

            </a>
          </Link>
        </div>
      ))}
    </div>
  );
}
