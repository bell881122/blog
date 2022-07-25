/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React from 'react';
import { recurseAllPaths } from 'utils/utils';

export async function getStaticProps() {
  const posts = recurseAllPaths(process.env.basePath);
  return { props: { posts } };
}

export default function Post({ posts }) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0'>
      {posts.length > 0 && posts.filter((post) => post && post.slug).map(({ slug, frontmatter, lastModified }) => {
        return (
          <div
            key={slug}
            className='border border-gray-200 m-2 rounded-xl shadow-xl overflow-hidden flex flex-col'
          >
            <Link href={`post/${slug}`}>
              <a>
                <div
                  className='w-full h-[300px]'
                  style={{
                    background: `url(${frontmatter.coverImage}) center center`,
                    backgroundSize: 'cover'
                  }}
                />
                <div className='p-4'>
                  <h1>{frontmatter.title}</h1>
                  <small>{frontmatter.date}</small>
                  <small className='text-gray-400'>{`（最後更新：${lastModified}）`}</small>
                  <div className='flex flex-wrap'>
                    {frontmatter.tags.toString().split(',').map((tag, index) => (
                      <small key={index} className={`px-2 py-0 block mt-1.5 text-gray-400 border border-gray-400 rounded-[8px] ${index !== frontmatter.tags.length - 1 ? "mr-1" : ''}`}>{tag}</small>
                    ))}
                  </div>
                </div>

              </a>
            </Link>
          </div>
        )
      })}
    </div>
  );
}
