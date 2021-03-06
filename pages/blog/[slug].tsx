import { promises as fs } from "fs";
import path from "path";
import type {
  InferGetStaticPropsType,
  GetStaticPaths,
  GetStaticProps,
  NextPage,
} from "next";
import Head from "next/head";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";

const BlogPostPage: NextPage = ({
  source,
  meta,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(source);
  return (
    <>
      <Head>
        <title>{meta.title}</title>
      </Head>
      {content}
    </>
  );
};

const contentDir = path.join(process.cwd(), "content", "blog");

const getStaticPaths: GetStaticPaths = async () => {
  const filenames = await fs.readdir(contentDir);
  return {
    fallback: false,
    paths: filenames.map((filename) => ({
      params: {
        slug: filename.replace(/\.mdx$/i, ""),
      },
    })),
  };
};

const getStaticProps: GetStaticProps = async ({ params }) => {
  const rawContent = await fs.readFile(
    path.join(contentDir, `${params?.slug}.mdx`),
    "utf8"
  );
  const { data: meta, content } = matter(rawContent);
  const source = await renderToString(content);

  const props = {
    source,
    meta,
  };

  return { props };
};

export { getStaticPaths, getStaticProps };
export default BlogPostPage;
