import React from 'react'
import EmailForm from './emailForm.js'
import { StaticQuery, graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import 'tachyons/css/tachyons.css'

const Suggested = () => {
  return (
    <div
      className="flex flex-column justify-end items-center pa2"
      style={{ gridArea: 'suggested' }}
    >
      <span className="sans-serif tracked ttu tc db pv3">CONTINUE READING</span>
      <StaticQuery
        query={graphql`
          query {
            allContentfulPost(limit: 2, sort: { order: DESC, fields: date }) {
              edges {
                node {
                  title
                  slug
                  metaDescription
                  postImage {
                    fluid(maxWidth: 720) {
                      ...GatsbyContentfulFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        `}
        render={(data) =>
          data.allContentfulPost.edges.map(({ node }) => (
            <div className="w-100 mw6 tc mb4" key={node.slug}>
              <Link to={node.slug}>
                <Img className="h5" fluid={node.postImage.fluid} alt={node.metaDescription} />
              </Link>
              <Link
                className="f4 serif tc dib pv2 ph3 display dark-gray no-underline"
                to={node.slug}
              >
                {node.title}
              </Link>
            </div>
          ))
        }
      />
      <EmailForm />
    </div>
  )
}

export default Suggested
