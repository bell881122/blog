
import fs from 'fs';
import matter from 'gray-matter';

export function recurseAllPaths(path, type = "getPostList") {
  const files = fs.readdirSync(path, { withFileTypes: true });
  return files.flatMap((file) => {
    if (file.name.endsWith(".md")) {
      if (type === "getPostList")
        return getMdFileData(path, file)
      else {
        return getMdFilePath(path, file)
      }
    } else if (file.isDirectory()) {
      return recurseAllPaths(`${path}/${file.name}`, type)
    }
    else {
      return null;
    }
  })
}

export function getMdFile(filePath) {
  const file = matter(fs.readFileSync(filePath, 'utf-8'));
  file.data.coverImage = file.data.coverImage || process.env.defaultImage;
  return file;
}

export function getMdFileData(path, file) {
  const filePath = `${path}/${file.name}`;
  const { data: frontmatter } = getMdFile(filePath);
  if (frontmatter.draft) return null;

  const rootPath = path.startsWith("posts/") ? (path.replace("posts/", "")) : (path.replace("posts", ""))
  const slug = `${rootPath.replace(/\//g, "_",)}${rootPath ? "_" : ""}${file.name.replace('.md', '')}`;
  let lastModified = fs.statSync(filePath).mtime;
  lastModified = `${lastModified.getFullYear()}-${(lastModified.getMonth() + 1).toString().padStart(2, '0')}-${lastModified.getDate().toString().padStart(2, '0')}`;
  return {
    slug,
    frontmatter,
    lastModified,
  }
}

export function getMdFilePath(path, file) {
  return {
    params: {
      slug: `${path.replace(/\//g, "_",)}_${file.name.replace('.md', '')}`.replace("posts_", ""),
    },
  }
}