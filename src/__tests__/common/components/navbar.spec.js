import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Navbar from '../../../common/components/navbar'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
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
        },
      },
    })
  )
})

describe('Navbar', () => {
  it('renders correctly', () => {
    const tree = create(<Navbar />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
