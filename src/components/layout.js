import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import BackgroundImage from 'gatsby-background-image';
import styled from 'styled-components';
import {device} from '../styles/media';

import Header from "./header"
import Footer from './footer'
import "./layout.css"

const StyledBackgroundImage = styled(BackgroundImage)`
  background-size: cover;
  background-attachment: fixed;
  overscroll-behavior: none;
  background-position: center center;
  background-repeat: no-repeat;
  width: 100vw;
  height: 100vh;
`

const Layout = ({ children }) => {
  return(
    <>
            <Header />
              <main>{children}</main>
            <Footer /> 
            </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
