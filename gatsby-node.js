/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

exports.createPages = ({ actions }) => {
    actions.createPage({
      path: `/commercialization/acceleration-program/demoday-2020/`,
      component: require.resolve(`./src/pages/index.js`)
    })
  }