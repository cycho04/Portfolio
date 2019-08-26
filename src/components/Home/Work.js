import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

const StyledMain = styled.div`
    background: white;
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 400px;
`

const StyledTitle = styled.h2`
    padding-top: 4rem !important;
    text-align: center;
    color: #a0a0a0;
    font-size: 1.2rem;
    font-weight: 400;
    padding-top: 1rem;
    margin: 0;
`

const StyledGrid = styled(Grid)`

`

const StyledGridItem = styled(Grid)`

`


const Work = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>MY WORK</StyledTitle> 
                <StyledGrid container>
                    <StyledGridItem item xs={12}>Project 1</StyledGridItem>
                    <StyledGridItem item xs={12}>Project 2</StyledGridItem>
                    <StyledGridItem item xs={12}>Project 3</StyledGridItem>
                </StyledGrid>  
            </StyledContainer>    
        </StyledMain>
    )
}

export default Work;