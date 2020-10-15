import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Layout from '../../../common/layouts'

beforeEach(() => {
  StaticQuery.mockImplementation(({ render }) =>
    render({
      site: {
        title: 'MKO Mom',
        mailChimpUrl: 'www.mailchimp.com',
        siteMetadata: {
          navbarLinks: [
            { to: '/makeup', name: 'Makeup' },
            { to: '/lifestyle', name: 'Lifestyle' },
            { to: '/blog', name: 'blog' },
          ],
          siteMetadata: {
            title: `Default Starter`,
            mailChimpUrl: `http://mailchimp.com`,
            pinterest: `www.pinterest.com`,
            facebook: `www.facebook.com`,
            twitter: `www.twitter.com`,
            youtube: `www.youtube.com`,
            github: `www.github.com`,
          },
        },
      },
    })
  )
})

describe('Layout', () => {
  it('renders correctly', () => {
    const tree = create(
      <Layout>
        <p>test</p>
      </Layout>
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
