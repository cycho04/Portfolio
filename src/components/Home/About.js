import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const StyledMain = styled.div`
    background: white;
`

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


const About = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>About</StyledTitle>
            </StyledContainer>    
        </StyledMain>
    )
}

export default About;