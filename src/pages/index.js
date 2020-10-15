import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../common/layouts'
import { graphql } from 'gatsby'
import Hero from '../homepage/components/hero'
import Card from '../homepage/components/card'
import About from '../homepage/components/about'
import Bio from '../homepage/components/bio'
import Seo from '../common/seo'

const Index = ({ data }) => {
  const post = data.featuredPost.edges[0].node
  return (
    <Layout>
      <Seo title={'Home Page'} description={data.site.siteMetadata.description} />
      <Hero
        title={post.title}
        image={post.postImage.fluid}
        to={post.slug}
        description={post.description}
      />
      <div className="flex flex-wrap center mw9 justify-around pb3">
        {data.cards.edges.map(({ node }) => (
          <Card
            key={node.slug}
            title={node.title}
            image={node.postImage.fluid}
            to={node.slug}
            description={node.description}
          />
        ))}
      </div>
      <About />
      <Bio />
    </Layout>
  )
}

Index.propTypes = {
  data: PropTypes.object.isRequired,
}

export const query = graphql`
  query {
    featuredPost: allContentfulPost(limit: 1, sort: { fields: date }) {
      edges {
        node {
          title
          description: metaDescription
          slug
          postImage {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    cards: allContentfulPost(skip: 1, limit: 3, sort: { order: DESC, fields: date }) {
      edges {
        node {
          title
          description: metaDescription
          slug
          postImage {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        description
      }
    }
  }
`

export default Index
