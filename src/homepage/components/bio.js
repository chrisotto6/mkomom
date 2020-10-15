import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import 'tachyons/css/tachyons.css'

const Bio = () => (
  <div className="pv5 pa2 flex flex-wrap mw9 center justify-around items-center">
    <StaticQuery
      query={graphql`
        query {
          image: file(relativePath: { eq: "img/author.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1080) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          copy: allContentfulCopy(filter: { name: { eq: "homepage__bio" } }) {
            nodes {
              name
              title
              childContentfulCopyContentTextNode {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
        }
      `}
      render={(data) => (
        <React.Fragment>
          <Img fluid={data.image.childImageSharp.fluid} alt="The Author" className="w-100 mw6" />
          <div className="w-100 pa2 mw6 mv4">
            <span className="db f2 display dark-gray">{data.copy.nodes[0].title}</span>
            <div
              className="lh-copy f5 serif mt4"
              dangerouslySetInnerHTML={{
                __html:
                  data.copy.nodes[0].childContentfulCopyContentTextNode.childMarkdownRemark.html,
              }}
            />
          </div>
        </React.Fragment>
      )}
    />
  </div>
)

export default Bio
