import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import 'tachyons/css/tachyons.css'

const Hero = (props) => {
  const { category, title, author, date } = props

  return (
    <div className="bg-washed-green ph2 pv5 flex flex-column justify-center items-center">
      <Link to={`/${category}`} className="sans-serif ttu mid-gray tracked f6">
        {category}
      </Link>
      <h1 className="dark-gray display fw4 f1-l f2 tc">{title}</h1>
      <span className="sans-serif tracked ttu f6 mb2">by {author}</span>
      <span className="sans-serif tracked ttu f6">{date}</span>
    </div>
  )
}

Hero.propTypes = {
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
}

export default Hero
