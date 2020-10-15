import React from 'react'
import { create } from 'react-test-renderer'
import Hero from '../../../blog/components/Hero'

describe('Hero', () => {
  it('renders correctly', () => {
    const tree = create(
      <Hero category="test" title="test title" author="Chris Otto" date="10-06-1988" />
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
