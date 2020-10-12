import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import '../../common/styles/custom.tachyons.css'
import 'tachyons'

const Hero = (props) => {
  const { image, description, title, to } = props

  return (
    <React.Fragment>
      <Img className="w-100 vh-50 mw9 center" fluid={image} alt={description} />
      <div className="h-auto bg-white mw9 w-100 flex flex-column items-center justify-center pv5 ph2 center">
        <span className="fw1 display dark-gray db tc w-100 mw7 f3 f2-ns">{title}</span>
        <p className="serif mw6 tc f5 dn dib-l mb4 db">{description}</p>
        <Link
          className="db pv3 ph5 tracked ttu b bg-washed-green dark-gray sans-serif no-underline hover-gray"
          to={to}
        >
          Read More
        </Link>
      </div>
    </React.Fragment>
  )
}

Hero.propTypes = {
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
}

export default Hero
