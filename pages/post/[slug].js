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
    <>
      <img
        width="100%"
        height={200}
        alt={frontmatter.title}
        src={frontmatter.coverImage}
      />
      <div className='prose m-4'>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: md().render(content) }} />
      </div>
    </>
  );
}