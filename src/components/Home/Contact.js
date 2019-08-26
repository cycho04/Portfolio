import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';

const StyledMain = styled.div`
    background: white;
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 250px;
    background-color: white;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    text-align: center;
    color: #a0a0a0;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
`


const Contact = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>Get in Touch</StyledTitle>
            </StyledContainer>    
        </StyledMain>  
    )
}

export default Contact;