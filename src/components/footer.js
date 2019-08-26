import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color:black;
  color: white;
  height: auto;
  min-height: 200px;
  text-align: center;
`

const StyledP = styled.p`
  margin: 0;
  padding-top: 1rem;
  padding-bottom: 1rem;
`


const Footer = ({ author }) => (
  <StyledFooter>
    <StyledP>Built with a mobile first approach</StyledP>
    <StyledP>{author}</StyledP>
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;