import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import Footer from '../components/footer.js'

//import Header from '../components/header'
//import './index.css'

const Layout = ({ children, data }) => (
  <div style={{ margin: '3rem auto', maxWidth: 600}}>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
      {children()}
      <Footer />
  </div>

)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
