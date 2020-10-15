import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../common/layouts'
import Hero from './components/hero.js'
import Body from './components/body.js'
import Seo from './seo.js'
import MetaSeo from '../common/seo'
import { graphql } from 'gatsby'

const Post = ({ location, data }) => {
  const {
    category,
    date,
    dateOriginal,
    author,
    title,
    slug,
    metaDescription,
  } = data.post.edges[0].node
  const content =
    data.post.edges[0].node.childContentfulPostContentTextNode.childMarkdownRemark.html
  return (
    <Layout>
      <Seo
        slug={slug}
        title={title}
        date={dateOriginal}
        description={metaDescription}
        author={author}
        image={data.post.edges[0].node.postImage.file.url}
      />
      <MetaSeo title={title} description={metaDescription} />
      <Hero author={author} date={date} category={category} title={title} />
      <Body
        content={content}
        description={metaDescription}
        image={data.post.edges[0].node.postImage.file.url}
        location={location}
      />
    </Layout>
  )
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired,
}

export default Post

export const query = graphql`
  query($slug: String!) {
    post: allContentfulPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          childContentfulPostContentTextNode {
            childMarkdownRemark {
              html
            }
          }
          date(formatString: "MMM Do, YYYY")
          dateOriginal: date
          category
          author
          title
          metaDescription
          slug
          postImage {
            fluid(maxWidth: 1080) {
              ...GatsbyContentfulFluid_withWebp
            }
            file {
              url
            }
          }
        }
      }
    }
    date: allContentfulPost(filter: { slug: { eq: $slug } }) {
      edges {
        node {
          date
        }
      }
    }
  }
`
