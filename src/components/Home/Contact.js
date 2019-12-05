import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';

import colors from '../../styles/colors';


const StyledContainer = styled(Container)`
    height: auto;
    min-height: 210px;
    text-align: center;
    background-color: #262626;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
    background: -webkit-linear-gradient(right, ${colors.thirdBG}, ${colors.secondaryBG}, ${colors.primaryBG});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`

const StyledButton = styled.button`
    padding: 1rem;
    border: none;
    border-radius: 25px;
    background-color: #333;
    color: ${colors.secondaryText};
    font-weight: 600;
    cursor: pointer;
    :focus{
        outline: none;
    }
    transition: 0.6s ease;
    &:hover{
        background-color: ${colors.secondaryBG};
        color: black;
    }
`

//element is hidden, used for copy to clipboard
const StyledInput = styled.input`
    opacity: 0;
`


class Contact extends React.Component {

    state={open: false}

    copyToClipboard = () => {
        let copyEmail = document.getElementById('email');
        copyEmail.select();
        copyEmail.setSelectionRange(0, 99999)
        document.execCommand("copy");
    }

    handleClick = () => {
        this.copyToClipboard();
        this.setState({
            open: true
        })
        setTimeout(() => {
            this.setState({
                open: false
            })
        }, 4000)
    }

    //A default onChange is needed on StyledInput
    render(){
        return(
            <div id='contact'>
                <StyledContainer>
                    <StyledTitle>Get in Touch</StyledTitle>
                    <StyledInput onChange={() => true} type="text" value="chrisycho04@gmail.com" id='email'/>
                    <br />
                    <StyledButton onClick={this.handleClick}>chrisycho04@gmail.com</StyledButton>
                    <Snackbar
                        anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                        }}
                        open={this.state.open}
                        ContentProps={{
                        'aria-describedby': 'message-id',
                        }}
                        message={<span>Copied to Clipboard</span>}
                    />
                </StyledContainer>    
            </div>  
        )
    }
}

export default Contact