export type MdxFrontmatter = {
  title: string,
  date: string,
  description: string,
  imageUrl?: string,
  tags: string[],
};

export type MdxNode = {
  id?: string,
  slug?: string,
  frontmatter?: MdxFrontmatter,
  body?: string,
};

export type AllMdxNodes = {
  allMdx: {
    nodes: MdxNode[]
  }
};

export type AllMdxGroup = {
  allMdx: {
    group: { fieldValue: string }[]
  }
};

export type Mdx = {
  mdx: MdxNode;
};