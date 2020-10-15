import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../common/layouts'
import { Link, graphql } from 'gatsby'
import Breadcrumbs from './components/breadcrumbs'
import Preview from './components/post-preview.js'
import Seo from '../common/seo'
import 'tachyons/css/tachyons.css'

export default class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const hasNext = this.props.data.posts.pageInfo.hasNextPage
    const category = this.props.pageContext.category
    const page = this.props.pageContext.pageNumber
    return (
      <Layout>
        <Seo title={`Posts Tagged ${category} - Page ${page}`} />
        <div className="pv5 flex items-center justify-center bg-washed-green">
          <h1 className="fw1 tc f2 display">Posts Tagged {category}</h1>
        </div>
        <div className="mw9 center">
          <Breadcrumbs lastName={category} lastPath={`${category}`} currentPage={`Page ${page}`} />
          {posts.map(({ node }) => (
            <Preview
              key={node.frontmatter.slug}
              fluidImage={node.frontmatter.postImage.childImageSharp.fluid}
              slug={node.frontmatter.slug}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              category={node.frontmatter.category}
              description={node.frontmatter.metaDescription}
            />
          ))}
          <div className="pv5 flex w-100">
            {hasNext && (
              <Link
                className="dark-gray sans-serif ttu tracked no-underline"
                to={this.props.pageContext.nextPage}
              >
                Next Page &rarr;
              </Link>
            )}
          </div>
        </div>
      </Layout>
    )
  }
}

BlogIndex.propTypes = {
  data: PropTypes.object.isRequired,
  pageContext: PropTypes.object.isRequired,
}

export const blogListQuery = graphql`
  query categoryPosts($skip: Int!, $limit: Int!, $category: String!) {
    posts: allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" }, category: { eq: $category } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "MMM Do YYYY")
            category
            metaDescription
            slug
            postImage {
              childImageSharp {
                fluid(maxWidth: 1080, maxHeight: 512) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`
