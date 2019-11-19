import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components';
import Container from '@material-ui/core/Container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import Drawer from '@material-ui/core/Drawer';
import colors from '../styles/colors';


const StyledHeader = styled(Container)`
  color: ${colors.secondaryText};
  background-color: #262626;
  width: 100%;
  height: 5rem;
  padding: 0 2.3rem;
  margin-bottom: 2rem;
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

const StyledHidden = styled.div`
  background-color: #333;
`

const StyledLinks = styled.a`
  color: ${colors.secondaryText};
  text-decoration: none;
  display: block;
  padding-left: 8%;
  line-height: 2.3rem;
`

const Header = ({siteTitle}) => {
  const [state, setState] = React.useState({
    top: false
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  return(
    <header>
      <StyledHeader>
        <StyledTitle>
          {siteTitle}
          <StyledIcon onClick={toggleDrawer('top', true)} icon={faBars}/>
          <Drawer anchor='top' open={state.top} onClick={toggleDrawer('top', false)}>
            <StyledHidden>
              <StyledLinks href='#work' onClick={toggleDrawer('top', false)}>
                Work
              </StyledLinks>
              <StyledLinks href='#aboutme'>
                About Me
              </StyledLinks>
              <StyledLinks href='#contact'>
                Contact
              </StyledLinks>
            </StyledHidden>
          </Drawer>
        </StyledTitle> 
      </StyledHeader>  
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
