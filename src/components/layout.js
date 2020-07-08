/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { Helmet } from "react-helmet"


import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (<>
        <Helmet>
          <meta charSet="utf-8" />
          <link rel="canonical" href="https://praxisinstitute.org/commercialization/acceleration-program/demoday-2020" />
          <link rel='shortcut icon' type='image/x-icon' href='https://praxisinstitute.org/wp-content/themes/expression-theme-child/favicon.ico' />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@praxis_sci" />
          <meta name="twitter:creator" content="@praxis_sci" />
          <meta name="twitter:title" content="It's with great excitement that we present the 2020 Cohort to you—virtually." />
          <meta name="twitter:description" content="These five companies were chosen for their potential to transform the lives of people with spinal cord injuries (SCI). Each company is at a post-prototype stage with proven traction, and was carefully selected by Praxis' world-class Research, Consumer and Commercialization team." />
          <meta name="twitter:image" content="https://sciaccel.praxisinstitute.org/commercialization/acceleration-program/demoday-2020/static/bannerPraxisDD-01-01-119ffa2292858f6778dd7c248ed3a492.jpg" />

          <meta property="og:url" content="https://praxisinstitute.org/commercialization/acceleration-program/demoday-2020" />
          <meta property="og:type" content="article" />
          <meta property="og:title" content="It's with great excitement that we present the 2020 Cohort to you—virtually." />
          <meta property="og:description" content="These five companies were chosen for their potential to transform the lives of people with spinal cord injuries (SCI). Each company is at a post-prototype stage with proven traction, and was carefully selected by Praxis' world-class Research, Consumer and Commercialization team." />
          <meta property="og:image" content="https://sciaccel.praxisinstitute.org/commercialization/acceleration-program/demoday-2020/static/bannerPraxisDD-01-01-119ffa2292858f6778dd7c248ed3a492.jpg" />

        </Helmet>
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
