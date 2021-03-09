module.exports = {
  siteMetadata: {
    title: `Luca Killmaier`,
    description: `This is the personal landing page of Luca Killmaier.`,
    author: `lucatk (Luca Killmaier) <mail@lucakillmaier.com>`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
