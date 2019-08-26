import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import {device} from '../../styles/media';

const StyledMain = styled.div`
    background: white;
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 400px;
    background-color: white;
`

const StyledTitle = styled.h2`
    font-size: 1.5rem;
    padding-top: 1rem;
    margin: 0;
    font-weight: 300;
`

const StyledSpan = styled.span`
    font-weight: 600;
    font-size: 1.75rem;
`

const StyledGrid = styled(Grid)`

`

const StyledGridItem = styled(Grid)`
    padding-top: 1rem;

    @media ${device.mobile}{
        padding-left: 2rem;
        padding-right: 2rem;
    }
`

const StyledText = styled.p`
    color: #646464;
`


const About = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledGrid container>
                    <StyledGridItem xs={12}>
                        <StyledTitle>
                            I'm an inventive  <StyledSpan>developer</StyledSpan>
                        </StyledTitle>
                    </StyledGridItem>
                    <StyledGridItem xs={12}>
                        <StyledText>
                            Based in Fremont, CA. 
                        </StyledText>
                    </StyledGridItem>
                    <StyledGridItem xs={12}>
                        <StyledText>
                            I use HTML, CSS, and JavaScript to build responsive applications.
                        </StyledText>
                    </StyledGridItem>
                </StyledGrid>
            </StyledContainer>    
        </StyledMain>
    )
}

export default About;