/* eslint-disable @next/next/no-img-element */
import md from 'markdown-it';
import { recurseAllPaths, getMdFile } from 'utils/utils';

export async function getStaticPaths() {
  const paths = recurseAllPaths(process.env.basePath, "getPostData").filter(path => path);
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const filePath = `posts/${slug.replace(/\_/g, "/",)}.md`
  const { data: frontmatter, content } = getMdFile(filePath);
  return {
    props: {
      frontmatter,
      content,
    },
  };
}

export default function PostPage({ frontmatter, content }) {
  return (
    <div className=''>
      <div
        className='w-full h-[400px]'
        style={{
          background: `url(${frontmatter.coverImage}) center center`,
          backgroundSize: 'cover'
        }}
      />
      <div className="max-w-[1000px] mx-auto">
        <div className='prose py-10 px-8 max-w-full shadow-2xl'>
          <h1>{frontmatter.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
        </div>
      </div>
    </div>
  );
}