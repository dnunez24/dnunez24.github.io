import Head from "next/head";
import Image from "next/image";
import type { InferGetStaticPropsType, NextPage, GetStaticProps } from "next";
import { Grid } from "@material-ui/core";
import { promises as fs } from "fs";
import path from "path";
import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import matter from "gray-matter";

const components = {
  Image,
};

const HomePage: NextPage = ({
  meta,
  source,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const content = hydrate(source, { components });

  return (
    <Grid container spacing={2}>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <Grid item xs={12}>
        {content}
      </Grid>
    </Grid>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const filename = path.join(process.cwd(), "content", "home.mdx");
  const rawMdx = await fs.readFile(filename, "utf8");
  const { data: meta, content } = matter(rawMdx);
  const source = await renderToString(content, { components });

  return {
    props: {
      meta,
      source,
    },
  };
};

export default HomePage;
