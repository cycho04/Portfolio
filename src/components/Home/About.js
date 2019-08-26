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
`

const StyledText = styled.p`

`


const About = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledGrid container>
                    <StyledGridItem xs={12}>
                        <StyledTitle>
                            I'm a blank <StyledSpan>blank</StyledSpan>
                        </StyledTitle>
                    </StyledGridItem>
                    <StyledGridItem xs={12}>
                        <StyledText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus.
                        </StyledText>
                    </StyledGridItem>
                    <StyledGridItem xs={12}>
                        <StyledText>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                            Aenean commodo ligula eget dolor. Aenean massa. 
                            Cum sociis natoque penatibus et magnis dis parturient montes, 
                            nascetur ridiculus mus.
                        </StyledText>
                    </StyledGridItem>
                </StyledGrid>
            </StyledContainer>    
        </StyledMain>
    )
}

export default About;