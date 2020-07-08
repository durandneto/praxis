module.exports = {
  siteMetadata: {
    title:"Praxis Institute - It's with great excitement that we present the 2020 Cohort to you—virtually.",
    description:"These five companies were chosen for their potential to transform the lives of people with spinal cord injuries (SCI). Each company is at a post-prototype stage with proven traction, and was carefully selected by Praxis' world-class Research, Consumer and Commercialization team.",
    author: `@durandneto`,
  },
  assetPrefix: `/commercialization-v2/acceleration-program/demoday-2020`,
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
  ],
}
