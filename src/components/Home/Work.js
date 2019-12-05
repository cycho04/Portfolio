import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';

import project1 from '../../images/software.jpg';
import project2 from '../../images/youtube.jpg';
import project3 from '../../images/casino.jpg';
import project4 from '../../images/30stills.jpg';
import {device} from '../../styles/media';
import colors from '../../styles/colors';


const StyledMain = styled(Container)`
    background-color: #262626;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 0;
`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 300px;
    padding-bottom: 1rem;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    text-align: center;
    font-size: 1.5rem;
    font-weight: 400;
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin: 0;
    background: -webkit-linear-gradient(right, ${colors.thirdBG}, ${colors.secondaryBG}, ${colors.primaryBG});
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: bold;
`

const StyledGridItem = styled(Grid)`
    padding-top: 1rem;
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    @media ${device.mobile}{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`

const StyledCardMedia = styled(CardMedia)`
    height: auto;
    min-height: 150px;

    @media ${device.mobile}{
        min-height: 200px;
    }

`

const StyledCard = styled(Card)`
    background-color: #262626;
    color: ${colors.secondaryText};
`

const StyledLink = styled.a`
    color: white;
    text-decoration: none !important;
    transition: 1s ease;
    &:hover{
        color: ${colors.secondaryBG};
    }
`


const Work = () => {

    const projects = [
        {title: 'LaMar Software Business App', url: 'https://cocky-pare-e0db29.netlify.com/', image: project1, subheader: 'Gatsby / GraphQL / Material UI'},
        {title: 'HueTube - Augmented YouTube', url: 'https://hue-tube.herokuapp.com/', image: project2, subheader: 'React / Axios / REST API'},
        {title: 'EZ Baccarat Tutorial', url: 'https://ez-baccarat.herokuapp.com/', image: project3, subheader: 'React / Node / Express / MongoDB'},
        {title: '30 Stills', url: 'https://laughing-brown-61dd44.netlify.com', image: project4, subheader: 'HTML / CSS / React / REST API'},
    ]

    const renderedProjects = projects.map((project, index)=> {
        return(
            <StyledGridItem key={index} item xs={12} sm={6} md={4}>
                <StyledCard>
                    <StyledLink target='_blank' rel="noopener noreferrer" href={project.url}>
                        <StyledCardMedia 
                            title={project.title}
                            image={project.image}
                        />    
                        <CardHeader 
                            title={project.title}
                            subheader={project.subheader}
                            subheaderTypographyProps={{'color': "initial"}}
                        />
                    </StyledLink>
                </StyledCard>
            </StyledGridItem>
        )
    })

    
    return(
        <StyledMain id='work'>
            <StyledContainer>
                <StyledTitle>PROJECTS</StyledTitle> 
                <Grid container>
                    {renderedProjects}
                </Grid>  
            </StyledContainer>    
        </StyledMain>
    )
}

export default Work;