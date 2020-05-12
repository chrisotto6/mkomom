import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

const Seo = (props) => {
  const { title, description } = props

  return (
    <StaticQuery
      query={graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <Helmet>
          <title>
            {title.replace(/\b\w/g, (letter) => letter.toUpperCase()) +
              ' - ' +
              data.site.siteMetadata.title}
          </title>
          <meta name="description" content={description} />
        </Helmet>
      )}
    />
  )
}

Seo.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Seo
