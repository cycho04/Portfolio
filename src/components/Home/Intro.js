import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 400px;
`

const StyledTitle = styled.h2`
    font-size: 2rem;
`

const StyledText = styled.p`

`


const Intro = () => {
    return(
        <StyledContainer>
            <StyledTitle>Portfolio Classic</StyledTitle>
            <StyledText>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
            </StyledText>
        </StyledContainer>
    )
}

export default Intro;