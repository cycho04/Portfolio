import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 400px;
    background-color: white;
`

const StyledTitle = styled.h2`
    font-size: 2rem;
    padding-top: 1rem;
    margin: 0;
`


const Work = () => {
    return(
        <StyledContainer>
            <StyledTitle>My Work</StyledTitle>
            
        </StyledContainer>
    )
}

export default Work;