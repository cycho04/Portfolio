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
    min-height: 300px;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    text-align: center;
    color: #a0a0a0;
    font-size: 1.5rem;
    font-weight: 400;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
`

const StyledGrid = styled(Grid)`

`

const StyledGridItem = styled(Grid)`
    padding-top: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;

    @media ${device.mobile}{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`

const StyledAvatar = styled(Avatar)`
    background-image: linear-gradient(#005AA7, #FFFDE4);
`

const StyledCardMedia = styled(CardMedia)`
    height: auto;
    min-height: 150px;

    @media ${device.mobile}{
        min-height: 200px;
    }

`

const StyledCard = styled(Card)`
    background-image: linear-gradient(#2C3E50, #4CA1AF);
    color: white;
`

const Work = () => {
    return(
        <StyledMain>
            <StyledContainer>
                <StyledTitle>MY WORK</StyledTitle> 
                <StyledGrid container>
                    <StyledGridItem item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <CardHeader 
                                avatar={
                                    <StyledAvatar aria-label="recipe">
                                      <TrendingUp />
                                    </StyledAvatar>
                                  }
                                title='Lamar Software'
                                subheader='Gatsby.JS / GraphQL / Material UI'
                                subheaderTypographyProps={{'color': 'white'}}
                            />
                            <a target='_blank' href='https://cocky-pare-e0db29.netlify.com/'>
                                <StyledCardMedia 
                                    title='Lamar Software Website'
                                    image={project1}
                                />    
                            </a>
                            <CardContent>
                                Progressive Web App (PWA) Template
                            </CardContent>
                        </StyledCard>
                    </StyledGridItem>
                    <StyledGridItem item xs={12} sm={6} md={4}>
                        <StyledCard>
                            <CardHeader 
                                avatar={
                                    <StyledAvatar aria-label="recipe">
                                      <FontAwesomeIcon icon={faYoutube}/>
                                    </StyledAvatar>
                                  }
                                title='Youtube Copy'
                                subheader='React.JS / Axios.JS / REST API'
                                subheaderTypographyProps={{'color': 'white'}}
                            />
                            <a target='_blank' href='https://my-youtube-mock.herokuapp.com/'>
                                <StyledCardMedia 
                                    title='YouTube'
                                    image={project2}
                                />     
                            </a>
                            
                            <CardContent>
                                Third Party API Integration
                            </CardContent>
                        </StyledCard>
                    </StyledGridItem>
                    <StyledGridItem item xs={12} sm md={4}>
                        <StyledCard>
                            <CardHeader 
                                avatar={
                                    <StyledAvatar aria-label="recipe">
                                      <FontAwesomeIcon icon={faDice}/>
                                    </StyledAvatar>
                                  }
                                title='Learn to play Baccarat'
                                subheader='React.JS / Node.JS / MongoDB'
                                subheaderTypographyProps={{'color': 'white'}}
                            />
                            <a target='_blank' href='https://young-garden-64652.herokuapp.com/'>
                                <StyledCardMedia 
                                    title='Baccarat Game'
                                    image={project3}
                                />
                            </a>
                            <CardContent>
                                Full Stack Application
                            </CardContent>
                        </StyledCard>
                    </StyledGridItem>
                </StyledGrid>  
            </StyledContainer>    
        </StyledMain>
    )
}

export default Work;