import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components';

const StyledHeader = styled.div`
  width: 100%;
  height: 5rem;
  padding: 0 2.3rem;
  box-sizing: border-box;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      {siteTitle}  
    </StyledHeader>  
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
