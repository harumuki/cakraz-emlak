require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Çakraz Emlak`,
        short_name: `Çakraz Emlak`,
        background_color: `#ffffff`,
        theme_color: `#16d33d`,
        icon: `src/images/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: process.env.API_URL || 'http://localhost:1337',
        contentTypes: [`advert`, `page`],
        singleTypes: [`homepage`],
        queryLimit: 1000,
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`poppins\:400,500,600`],
        display: 'swap',
      },
    },
  ],
}
