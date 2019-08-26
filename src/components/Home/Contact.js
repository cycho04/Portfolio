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
    text-align: center;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    color: #a0a0a0;
    font-size: 1.5rem;
    font-weight: 400;
    margin: 0;
`

//element is hidden, used for copy to clipboard
const StyledInput = styled.input`
    opacity: 0;
`

const copyToClipboard = () => {
    let copyEmail = document.getElementById('email');
    copyEmail.select();
    copyEmail.setSelectionRange(0, 99999)
    document.execCommand("copy");
}


const Contact = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>Get in Touch</StyledTitle>
                <StyledInput type="text" value="chrisycho04@gmail.com" id='email'/>
                <button onClick={copyToClipboard}>chrisycho04@gmail.com</button>
            </StyledContainer>    
        </StyledMain>  
    )
}

export default Contact;