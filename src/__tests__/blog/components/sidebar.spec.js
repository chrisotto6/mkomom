import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Sidebar from '../../../blog/components/sidebar'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          siteUrl: `Default Starter`,
        },
      },
    })
  )
})

describe('Sidebar', () => {
  it('renders correctly', () => {
    const tree = create(<Sidebar desc="test" img="test.jpg" location="test location" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
