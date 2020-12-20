module.exports = {
  siteMetadata: {
    title: "Aalya Banu Portfolio",
    description: "Software developer portfolio site",
    author: "Aalya Banu",
    twitterUsername: "@aalyabanu",
    image: "/twitter-img.png",
    siteUrl: "https://aalya-banu-portfolio.netlify.app",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `http://localhost:1337`,
        queryLimit: 1000,
        contentTypes: [`projects`, `blogs`],
        singleTypes: [`about`],
      },
    },
    {

      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto`,
          `source sans pro\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'

      }
      
    },
    
  ],
}
