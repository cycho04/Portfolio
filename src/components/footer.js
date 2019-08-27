import PropTypes from "prop-types"
import React from "react"
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

const StyledFooter = styled.footer`
  background-color: transparent;
  color: rgba(255,255,255,0.8);
  height: auto;
  min-height: 200px;
  text-align: center;
`

const StyledTextBox = styled.div`
  padding-top: 4rem;
  line-height: 1.5rem;
`

const StyledIconBox = styled.div`
  padding-top: 1rem;
  font-size: 1.5rem;
  color: white;
`

const StyledP = styled.p`
  margin: 0;
`

const StyledLink = styled.a`
  color: white;
`


const Footer = ({ author }) => (
  <StyledFooter>
    <StyledTextBox>
      <StyledP>© 2019 {author}</StyledP>
      <StyledP>Built with a mobile first approach</StyledP>
    </StyledTextBox>
    <StyledIconBox>
      <StyledLink target='_blank' href='https://github.com/cycho04'><FontAwesomeIcon icon={faGithub}/></StyledLink>
      &nbsp;
      &nbsp;
      <StyledLink target='_blank' href='https://www.linkedin.com/in/chrisycho/'><FontAwesomeIcon icon={faLinkedin}/></StyledLink>
    </StyledIconBox>
  </StyledFooter>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer;