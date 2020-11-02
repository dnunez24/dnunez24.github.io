import { promises as fs } from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import type { NextPage } from "next";

interface BlogPost {
  slug: string;
  meta: {
    title: string;
    description: string;
  };
}

interface BlogPostIndexProps {
  posts: BlogPost[];
}

const BlogIndexPage: NextPage<BlogPostIndexProps> = ({ posts }) => {
  return (
    <>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${encodeURIComponent(post.slug)}`}>
              {post.meta.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

const getFilenamesFromDirectory = async (directory: string) => {
  const files = await fs.readdir(directory);
  return files.map((file) => path.join(directory, file));
};

const readFiles = async (files: string[]) =>
  Promise.all(files.map((filename: string) => fs.readFile(filename, "utf8")));

const getStaticProps = async () => {
  const contentDir = path.join(process.cwd(), "content", "blog");
  const filenames = await getFilenamesFromDirectory(contentDir);
  const filesContent = await readFiles(filenames);

  const posts = filenames.map((filename, index) => {
    const content = filesContent[index];
    const { data: meta } = matter(content);
    const slug = path.basename(filename).replace(/\.mdx$/, "");

    return {
      slug,
      content,
      meta,
    };
  });

  return { props: { posts } };
};

export { getStaticProps };
export default BlogIndexPage;
