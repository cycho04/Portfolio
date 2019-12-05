import React from 'react';
import styled, {css} from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {device} from '../../styles/media';
import colors from '../../styles/colors';
import coffee from '../../images/coffee.png';

const StyledMain = styled.div`
    margin-bottom: 2rem;
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 200px;
    background-color: #262626;
    @media ${device.mobile}{
        padding-top: 3rem;
    }
`

const StyledTitle = styled.h2`
    font-size: 1.5rem;
    padding-top: 1rem;
    margin: 0;
    font-weight: 300;
    background: -webkit-linear-gradient(right, ${colors.thirdBG}, ${colors.secondaryBG}, ${colors.primaryBG});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`

const StyledSpan = styled.span`
    font-weight: 600;
    font-size: 1.75rem;
`

const StyledGrid = styled(Grid)`

`

const StyledGridItem = styled(Grid)`
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    ${props => props.image && css`
        text-align: center;
    `}
`

const StyledText = styled.p`
    color: ${colors.secondaryText};
    line-height: 1.3rem;
`

const StyledImg = styled.img`
    width: 100%;
    max-width: 300px;
`

const About = () => {
    return(
        <StyledMain id='aboutme'>
            <StyledContainer>
                <StyledGrid container>
                    <StyledGridItem item xs={12} md={4}>
                        <StyledTitle>
                            I'm a self taught 
                            <br />
                            <StyledSpan>Developer</StyledSpan>
                        </StyledTitle>
                    </StyledGridItem>
                    <StyledGridItem item xs={12} md={4}>
                        <StyledText>
                            I'm currently based in Fremont, CA. 
                            I'm passionate about building mobile friendly applications 
                            and turning creative ideas into well ordered projects.
                            When I'm not on my computer, I enjoy eating different cuisines, 
                            playing with my cats, playing games and exploring new cities.
                        </StyledText>
                    </StyledGridItem>
                    <StyledGridItem image='true' item xs={12} md={4}>
                        <StyledImg src={coffee}/>
                    </StyledGridItem>
                </StyledGrid>
            </StyledContainer>    
        </StyledMain>
    )
}

export default About