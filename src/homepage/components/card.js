import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import 'tachyons/css/tachyons.css'

const Card = (props) => {
  const { image, description, title, to } = props

  return (
    <div className="w-100 mw6 pa2">
      <Link to={to}>
        <Img fluid={image} alt="" className="w-100 h5" />
      </Link>
      <div className="pa2 display dark-gray f3 tc mb3 h3">{title}</div>
      <div className="pa2 lh-copy serif tc mb3 h3">{description}</div>
      <div className="pa2 flex justify-end serif h3">
        <Link to={to} className="dark-gray tracked ttu sans-serif f5">
          Read More &raquo;
        </Link>
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Card
