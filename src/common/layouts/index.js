import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import 'tachyons/css/tachyons.css'
import '../styles/custom.tachyons.css'

const Layout = (props) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-white mid-gray" />
    </Helmet>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
}

export default Layout
