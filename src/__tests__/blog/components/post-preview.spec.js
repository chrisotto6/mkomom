import React from 'react'
import { create } from 'react-test-renderer'
import Preview from '../../../blog/components/post-preview'

describe('Preview', () => {
  it('renders correctly', () => {
    const tree = create(
      <Preview
        fluidImage="test img"
        slug="test slug"
        title="test title"
        date="10-06-1988"
        category="test"
        description="test description"
      />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
