require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

const theme = require("@reflexjs/preset-base")

module.exports = {
  siteMetadata: {
    title: `Hotel Engine Sample`,
    description: `Sample project for Hotel Engine`,
    author: `@stackshuffleio`,
    siteUrl: `https://tundera.dev/hotel-engine-demo`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
    {
      resolve: "gatsby-plugin-theme-ui",
      options: {
        prismPreset: "shades-of-purple",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "GitHub",
        fieldName: "github",
        url: "https://api.github.com/graphql",
        // HTTP headers
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
        },
        // Additional options to pass to node-fetch
        fetchOptions: {},
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `hotel-engine-sample`,
        short_name: `Hotel Engine Sample`,
        start_url: `/`,
        background_color: theme.colors?.background,
        theme_color: theme.colors?.primary,
        display: `minimal-ui`,
        icon: `src/images/hotel.png`,
      },
    },
    // `gatsby-plugin-offline`,
  ],
}
