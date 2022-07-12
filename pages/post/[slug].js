/* eslint-disable @next/next/no-img-element */
import fs from 'fs';
import matter from 'gray-matter';
import md from 'markdown-it';

export async function getStaticPaths() {
  const basePath = 'posts';
  const paths = [];

  const getPaths = (path) => {
    const files = fs.readdirSync(path);
    files.forEach((fileName) => {
      if (fileName.endsWith(".md")) {
        let slug = `${path.replace(/\//g, "_",)}_${fileName.replace('.md', '')}`

        paths.push({
          params: {
            slug: slug.replace("posts_", ""),
          },
        })
      } else {
        getPaths(`${path}/${fileName}`)
      }
    })
  }

  getPaths(basePath);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const fileName = fs.readFileSync(`posts/${slug.replace(/\_/g, "/",)}.md`, 'utf-8');

  const { data: frontmatter, content } = matter(fileName);
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