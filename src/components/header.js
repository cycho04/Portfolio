import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components';
import Dehaze from "@material-ui/icons/Dehaze";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

const StyledHeader = styled.div`
  color: rgba(255,255,255,0.9);
  width: 100%;
  height: 5rem;
  padding: 0 2.3rem;
  box-sizing: border-box;
  line-height: 5rem;
`

const StyledTitle = styled.h5`
  font-size: 1.5rem;
  margin: 0;
  font-weight: 600;
`

const StyledIcon = styled(FontAwesomeIcon)`
  height: 1rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      <StyledTitle>
        {siteTitle}
        <StyledIcon icon={faBars}/>
      </StyledTitle> 
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
