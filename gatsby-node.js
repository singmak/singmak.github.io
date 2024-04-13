const _ = require("lodash");
const path = require("path");
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      externals: getConfig().externals.concat(({ context, request }, callback) => {
        const regex = /^@?firebase(\/(.+))?/
        // exclude firebase products from being bundled, so they will be loaded using require() at runtime.
        if (regex.test(request)) {
          return callback(null, `commonjs ${request}`) // <- use commonjs!
        }
        callback()
      }),
    })
  }
}



exports.onCreateNode = ({ node, getNode, actions: { createNodeField } }) => {
  if (node.internal.type === 'Mdx') {
    createNodeField({
      node,
      name: 'slug',
      value: createFilePath({ node, getNode })
    });
  }
};

const createTagPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/tag.tsx")

  const result = await graphql(`{
    allMdx(sort: {frontmatter: {date: DESC}}) {
      group(field: {frontmatter: {tags: SELECT}}) {
        fieldValue
      }
    }
  }`);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract tag data from query
  const tags = result.data.allMdx.group

  // Make tag pages
  tags.forEach(tag => {
    console.log(tag);
    createPage({
      path: `/tag/${_.kebabCase(tag.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
};

const createBlogListPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve("src/templates/blog-list.tsx")

  const result = await graphql(`{
    allMdx(sort: {frontmatter: {date: DESC}}) {
      nodes {
        id
      }
    }
  }`);

  // handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }

  // Extract data from query
  const posts = result.data.allMdx.nodes;

  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)
  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: blogTemplate,
      context: {
        limit: postsPerPage,
        skip: i * postsPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  await createTagPages({ actions, graphql, reporter });
  await createBlogListPages({ actions, graphql, reporter });

  const { createRedirect } = actions

  createRedirect({
    fromPath: `/`,
    toPath: `/blog/`,
    redirectInBrowser: true,
    isPermanent: true,
  })
}