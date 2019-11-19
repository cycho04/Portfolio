import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Snackbar from '@material-ui/core/Snackbar';
import colors from '../../styles/colors';


const StyledMain = styled.div`
    background-color: ${colors.secondaryBG};
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 210px;
    text-align: center;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    color: ${colors.secondaryText};
    font-size: 2rem;
    font-weight: 400;
    margin: 0;
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

    render(){
        return(
            <StyledMain id='contact'>
                <StyledContainer>
                    <StyledTitle>Get in Touch</StyledTitle>
                    <StyledInput type="text" value="chrisycho04@gmail.com" id='email'/>
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
            </StyledMain>  
        )
    }
}

export default Contact;