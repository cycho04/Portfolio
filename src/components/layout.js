import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  background-attachment: fixed;
  overscroll-behavior: none;
  background-position: center center;
  background-repeat: no-repeat;
`

const Layout = ({ children }) => {
  return(
    <StaticQuery
      query={  
        graphql`{
          background:file(relativePath:{eq:"background2.jpg"}) {    
            childImageSharp {      
              fluid(maxWidth: 1600) {        
                ...GatsbyImageSharpFluid      
              }    
            }  
          }
        }`
      }  
      render={data => {
        // Set ImageData.
        const imageData = data.background.childImageSharp.fluid
        return (
          <StyledBackgroundImage
            Tag="section"
            fluid={imageData}
            backgroundColor={`#040e18`}
          >
            <Header />
              <main>{children}</main>
            <Footer /> 
          </StyledBackgroundImage>
        )
      }}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
