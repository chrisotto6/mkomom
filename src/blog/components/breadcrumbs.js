import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import 'tachyons/css/tachyons.css'

const Breadcrumbs = (props) => {
  const { lastPath, lastName, currentPage } = props

  return (
    <div className="w-100 f6 pv3 flex items-center tracked ttu sans-serif justify-around mw5">
      <Link to="/" className="dark-gray">
        Home
      </Link>
      <span>&nbsp;&gt;&nbsp;</span>
      <Link to={lastPath} className="dark-gray">
        {lastName}
      </Link>
      <span>&nbsp;&gt;&nbsp;</span>
      <span className="mid-gray">{currentPage}</span>
    </div>
  )
}

Breadcrumbs.propTypes = {
  lastPath: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
}

export default Breadcrumbs
