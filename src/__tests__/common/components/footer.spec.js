import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Footer from '../../../common/components/footer'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
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
    })
  )
})

describe('Footer', () => {
  it('renders correctly', () => {
    const tree = create(<Footer />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
