import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../common/layouts'
import { Link, graphql } from 'gatsby'
import Breadcrumbs from './components/breadcrumbs'
import Preview from './components/post-preview.js'
import Seo from '../common/seo'
import 'tachyons/css/tachyons.css'

class BlogIndex extends React.Component {
  render() {
    const posts = this.props.data.posts.edges
    const hasNext = this.props.data.posts.pageInfo.hasNextPage
    return (
      <Layout>
        <Seo
          title={`All Blog Posts - Page ${this.props.pageContext.pageNumber}`}
          description={`Index of all blog posts. Page ${this.props.pageContext.pageNumber}`}
        />
        <div className="pv5 flex items-center justify-center bg-washed-green">
          <h1 className="fw1 tc f2 display">All Blog Posts</h1>
        </div>
        <div className="mw9 center">
          <Breadcrumbs
            lastName="Blog"
            lastPath="/blog"
            currentPage={`Page ${this.props.pageContext.pageNumber}`}
          />
          {posts.map(({ node }) => (
            <Preview
              key={node.slug}
              fluidImage={node.postImage.fluid}
              slug={node.slug}
              title={node.title}
              date={node.date}
              category={node.category}
              description={node.metaDescription}
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
  pageContext: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
}

export default BlogIndex

export const blogListQuery = graphql`
  query posts($skip: Int!, $limit: Int!) {
    posts: allContentfulPost(sort: { fields: date, order: DESC }, limit: $limit, skip: $skip) {
      edges {
        node {
          title
          date(formatString: "MMM Do YYYY")
          category
          metaDescription
          slug
          postImage {
            fluid(maxWidth: 1080, maxHeight: 512) {
              ...GatsbyContentfulFluid_withWebp
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
