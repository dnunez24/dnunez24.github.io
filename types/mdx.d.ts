declare module "*.mdx" {
  const MDXComponent: (props: unknown) => JSX.Element;
  // eslint-disable-next-line import/no-default-export
  export default MDXComponent;
}
