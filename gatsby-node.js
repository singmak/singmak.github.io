const _ = require("lodash");
const path = require("path");

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

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const tagTemplate = path.resolve("src/templates/tag.tsx")

  const result = await graphql(`
  {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
  }
  `);

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
}