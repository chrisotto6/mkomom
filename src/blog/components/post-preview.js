import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import 'tachyons'

const Preview = (props) => {
  const { fluidImage, slug, title, date, category, description } = props

  return (
    <div className="pv3 flex justify-center items-center flex-wrap">
      <Img className="w-100 mw6 h-100" fluid={fluidImage} alt="" />
      <div className="mw7 pa2 ph4-ns">
        <span className="db f2 display">
          <Link className="dark-gray no-underline" to={slug}>
            {title}
          </Link>
        </span>
        <div className="mv3 mb5-ns flex justify-between">
          <div className="db f6 silver ttu tracked sans-serif">{date}</div>
          <div className="db f6 silver ttu tracked sans-serif">TAGGED: {category}</div>
        </div>
        <div className="serif f4 lh-copy">{description}</div>
      </div>
    </div>
  )
}

Preview.propTypes = {
  fluidImage: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default Preview
