module.exports = {
    siteMetadata: {
      title: `Sing Mak`,
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-remark-images",
      "gatsby-theme-material-ui",
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
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
              },
            },
          ],
        },
      },
    ]
};