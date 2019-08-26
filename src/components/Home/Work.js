import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import project1 from '../../images/software.jpg';
import project2 from '../../images/youtube.jpg';
import project3 from '../../images/casino.jpg';
import Code from '@material-ui/icons/Code';
import Language from '@material-ui/icons/Language';
import TrendingUp from '@material-ui/icons/TrendingUp';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {device} from '../../styles/media';


const StyledMain = styled.div`
    background: white;
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 400px;
`

const StyledTitle = styled.h2`
    padding-top: 4rem !important;
    text-align: center;
    color: #a0a0a0;
    font-size: 1.2rem;
    font-weight: 400;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
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

const StyledCardMedia = styled(CardMedia)`
    height: auto;
    min-height: 150px;

    @media ${device.mobile}{
        min-height: 300px;
    }

`

const Work = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>MY WORK</StyledTitle> 
                <StyledGrid container>
                    <StyledGridItem item xs={12}>
                        <Card>
                            <CardHeader 
                                avatar={
                                    <Avatar aria-label="recipe">
                                      <TrendingUp />
                                    </Avatar>
                                  }
                                title='Lamar Software'
                                subheader='SPA'
                            />
                            <StyledCardMedia 
                                title='Lamar Software Website'
                                image={project1}
                            />
                            <CardContent>
                                Website Template 
                            </CardContent>
                        </Card>
                    </StyledGridItem>
                    <StyledGridItem item xs={12}>
                        <Card>
                            <CardHeader 
                                avatar={
                                    <Avatar aria-label="recipe">
                                      <FontAwesomeIcon icon={faYoutube}/>
                                    </Avatar>
                                  }
                                title='Youtube Copy'
                                subheader='Third Party API Integration'
                            />
                            <StyledCardMedia 
                                title='YouTube'
                                image={project2}
                            />
                            <CardContent>
                                Third Party API Integration
                            </CardContent>
                        </Card>
                    </StyledGridItem>
                    <StyledGridItem item xs={12}>
                        <Card>
                            <CardHeader 
                                avatar={
                                    <Avatar aria-label="recipe">
                                      <FontAwesomeIcon icon={faDice}/>
                                    </Avatar>
                                  }
                                title='Learn to play Baccarat'
                                subheader='Full Stack Application'
                            />
                            <StyledCardMedia 
                                title='Baccarat Game'
                                image={project3}
                            />
                            <CardContent>
                                blah blash sjdfnkf snfajk safd af af a f
                            </CardContent>
                        </Card>
                    </StyledGridItem>
                </StyledGrid>  
            </StyledContainer>    
        </StyledMain>
    )
}

export default Work;