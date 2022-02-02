export type MdxFrontmatter = {
  title: string,
  date: string,
};

export type MdxNode = {
  id?: string,
  slug?: string,
  frontmatter?: MdxFrontmatter,
  body?: string,
};

export type AllMdx = {
  allMdx: {
    nodes: MdxNode[]
  }
};

export type Mdx = {
  mdx: MdxNode;
};