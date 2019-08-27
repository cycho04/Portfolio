import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import {device} from '../../styles/media';

const StyledContainer = styled(Container)`
    color: rgba(255,255,255, 0.9);
    text-align: center;
    height: auto;
    min-height: 450px;
    padding-left: 3rem;
    padding-right: 3rem;
    padding-top: 3rem;

    @media ${device.mobile}{
        min-height: 350px;
        padding-left: 8rem;
        padding-right: 8rem;
    }
    @media ${device.tablet}{
        padding-left: 14rem;
        padding-right: 14rem;
    }
    @media ${device.laptop}{
        padding-left: 17rem;
        padding-right: 17rem;
    }
`

const StyledTitle = styled.h2`
    font-size: 2.5rem;
    font-weight: 400;
    margin-bottom: 1rem;
`

const StyledText = styled.p`
    line-height: 1.8rem;
`


const Intro = () => {
    return(
        <StyledContainer>
            <StyledTitle>Chris Cho</StyledTitle>
            <StyledText>
                As a Front End Developer, I know how important it is to make websites look good and work even better.
                I focus on writing readable and clean code that is easy to customize and maintain.
            </StyledText>
        </StyledContainer>
    )
}

export default Intro;