import React from 'react'
import { create } from 'react-test-renderer'
import { StaticQuery } from 'gatsby'
import Breadcrumbs from '../../../blog/components/breadcrumbs'

describe('Breadcrumbs', () => {
  it('renders correctly', () => {
    const tree = create(
      <Breadcrumbs lastPath="test" lastName="test" currentPage="test page" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
