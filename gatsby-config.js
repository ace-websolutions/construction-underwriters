module.exports = {
  siteMetadata: {
    title: `Construction Underwriters`,
    description: `Sample website for a business involving bond underwriting.`,
    author: `Ace Web Solutions`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
