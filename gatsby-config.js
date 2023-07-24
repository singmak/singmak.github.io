module.exports = {
    siteMetadata: {
      title: `Sing Mak's software engineering journey`,
      siteUrl: `https://singmak.github.io`,
    },
    trailingSlash: `legacy`,
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-remark-images",
      "gatsby-theme-material-ui",
      "gatsby-plugin-react-helmet",
      "gatsby-plugin-sitemap",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `posts`,
          path: `${__dirname}/posts`,
        }
      },
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: `images`,
          path: `${__dirname}/src/images`,
        }
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          mdxOptions: {
            remarkPlugins: [{
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
              },
            }],
            rehypePlugins: [],
          }
        },
      },
      {
        resolve: `gatsby-plugin-google-fonts`,
        options: {
          fonts: [
            `Merriweather`,
            `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
          ],
          display: 'swap'
        }
      }
    ]
};