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
    min-height: 200px;
    background-color: white;
    @media ${device.mobile}{
        padding-top: 3rem;
    }
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
    line-height: 1.3rem;
`


const About = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledGrid container>
                    <StyledGridItem item xs={12} md={4}>
                        <StyledTitle>
                            I'm an inventive  
                            <br />
                            <StyledSpan>Developer</StyledSpan>
                        </StyledTitle>
                    </StyledGridItem>
                    <StyledGridItem item xs={12} md={4}>
                        <StyledText>
                            I'm currently based in Fremont, CA. 
                            I'm passionate about building mobile friendly applications 
                            and turning creative ideas into well ordered projects.
                            When I'm not on my computer, I enjoy eating different cuisines, playing with my cat and exploring new cities.
                        </StyledText>
                    </StyledGridItem>
                    <StyledGridItem item xs={12} md={4}>
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