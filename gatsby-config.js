require('dotenv').config()

module.exports = {
  siteMetadata: {
    navbarLinks: [
      { to: '/makeup', name: 'Makeup' },
      { to: '/lifestyle', name: 'Lifestyle' },
      { to: '/blog', name: 'blog' },
    ],
    title: 'MKO Mom',
    description: "Madalyn Otto's Blog",
    siteUrl: 'https://www.mkomom.com',
    homepageHeader: "Welcome to Madalyn's Blog!",
    homepageAbout:
      'I am a mother of twin boys, I love spending time with my family and being outdoors. Come along with me on the journey of parenting!',
    mailChimpUrl: 'https://mailchimp.com',
    mailChimpToken: 'MAILCHIMP TOKEN HERE',
    youtube: '', // YOUR YOUTUBE PROFILE HERE
    github: '', // YOUR GITHUB PROFILE HERE
    pinterest: '', // YOUR PINTEREST PROFILE HERE
    facebook: '', // YOUR FACEBOOK PROFILE HERE
    twitter: '', // YOUR TWITTER PROFILE HERE
  },
  plugins: [
    'gatsby-plugin-sitemap',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-feed',
      options: {
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
      `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulPost } }) => {
              return allContentfulPost.edges.map((edge) => {
                return Object.assign({}, edge.node, {
                  description:
                    edge.node.childContentfulPostContentTextNode.childMarkdownRemark.excerpt,
                  date: edge.node.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [
                    {
                      'content:encoded':
                        edge.node.childContentfulPostContentTextNode.childMarkdownRemark.html,
                    },
                  ],
                })
              })
            },
            query: `
            {
              allContentfulPost(limit: 1000, sort: {order: DESC, fields: [date]}) {
                edges {
                  node {
                    childContentfulPostContentTextNode {
                      childMarkdownRemark {
                        excerpt
                        html
                      }
                    }
                    slug
                    title
                    date
                  }
                }
              }
            }
          `,
            output: '/rss.xml',
            title: 'Gatsby RSS Feed',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content`,
        name: 'content',
      },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-copy-linked-files',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1400,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Karla', 'Playfair Display', 'Lora'],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-152761707-2',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/success'],
        cookieDomain: 'mkomom.com',
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE,
        accessToken: process.env.CONTENTFUL_API_KEY,
        downloadLocal: true,
      },
    },
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
  ],
}
