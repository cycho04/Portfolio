import PropTypes from "prop-types"
import React from "react"
import styled, {css} from 'styled-components';
import Dehaze from "@material-ui/icons/Dehaze";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

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

const StyledIcon = styled(Dehaze)`
  margin: 0;
  float: right;
  padding-top: 1.6rem;
`

const Header = ({ siteTitle }) => (
  <header>
    <StyledHeader>
      <StyledTitle>
        {siteTitle}
        <FontAwesomeIcon icon={faBars}/>
      </StyledTitle> 
    </StyledHeader>  
    <ExpansionPanel>
    <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Hello
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </ExpansionPanelDetails>
    </ExpansionPanel>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
