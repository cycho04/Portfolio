import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';

const StyledFooter = styled.footer`
  background-color:black;
  color: white;
  height: auto;
  min-height: 100px;
`


const Footer = ({ author }) => (
  <StyledFooter>
      {author}
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;