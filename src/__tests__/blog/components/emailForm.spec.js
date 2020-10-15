import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import EmailForm from '../../../blog/components/emailForm'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          mailChimpUrl: `www.mailchimp.com`,
          mailChimpToken: `token`,
        },
      },
    })
  )
})

describe('EmailForm', () => {
  it('renders correctly', () => {
    const tree = create(<EmailForm />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
