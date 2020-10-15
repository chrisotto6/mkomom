import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Seo from '../../../common/seo/index'

beforeEach(() => {
  StaticQuery.mockImplementationOnce(({ render }) =>
    render({
      site: {
        siteMetadata: {
          title: `Default Starter`,
        },
      },
    })
  )
})

describe('Seo', () => {
  it('renders correctly', () => {
    const tree = create(<Seo title="test" description="test description" />).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
