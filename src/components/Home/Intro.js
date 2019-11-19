import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import {device} from '../../styles/media';
import colors from '../../styles/colors';

const StyledContainer = styled(Container)`
    color: ${colors.secondaryText};
    background-color: #262626;
    text-align: center;
    height: auto;
    min-height: 400px;
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
    background: -webkit-linear-gradient(#eee, #333);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
`

const StyledText = styled.p`
    line-height: 1.8rem;
`


const Intro = () => {
    return(
        <StyledContainer>
            <StyledTitle>Chris Cho</StyledTitle>
            <StyledText>
                I focus on writing readable and clean code that is easy to customize and maintain.
            </StyledText>
        </StyledContainer>
    )
}

export default Intro;