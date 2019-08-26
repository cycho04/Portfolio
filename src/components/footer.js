import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
  background-color:black;
  color: rgba(255,255,255,0.6);
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
    <StyledP>© 2019 {author}</StyledP>
    <StyledP>Built with a mobile first approach</StyledP>
    <FontAwesomeIcon icon={faGithub}/>
    <FontAwesomeIcon icon={faLinkedin}/>
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;