import React from 'react'
import PropTypes from 'prop-types'
import Sidebar from './sidebar.js'
import Suggested from './suggested.js'
import 'tachyons/css/tachyons.css'
import '../../common/styles/custom.tachyons.css'
import '../styles/grid.css'

const Body = (props) => {
  const { content, image, description, location } = props

  return (
    <div className="min-vh-100 blog__grid">
      <div style={{ gridArea: 'header' }} />
      <div
        className="mw8 serif f4 lh-copy center pa2 article__container"
        style={{ gridArea: 'content' }}
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <Sidebar img={image} desc={description} location={location} />
      <Suggested />
    </div>
  )
}

Body.propTypes = {
  content: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default Body
