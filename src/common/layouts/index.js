import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Navbar from '../components/navbar.js'
import Footer from '../components/footer.js'
import 'tachyons'
import '../styles/custom.tachyons.css'

const About = (props) => (
  <React.Fragment>
    <Helmet>
      <body className="bg-white mid-gray" />
    </Helmet>
    <Navbar />
    {props.children}
    <Footer />
  </React.Fragment>
)

About.propTypes = {
  children: PropTypes.object.isRequired,
}

export default About
