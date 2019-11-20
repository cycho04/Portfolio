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

const StyledGrid = styled(Grid)`

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

const Work = () => {

    const projects = [
        {title: 'LaMar Software', url: 'https://cocky-pare-e0db29.netlify.com/', image: project1, subheader: 'Gatsby.JS / GraphQL / Material UI'},
        {title: 'YouTube Copy', url: 'https://my-youtube-mock.herokuapp.com/', image: project2, subheader: 'React.JS / Axios.JS / REST API'},
        {title: 'Learn to Play Baccarat', url: 'https://young-garden-64652.herokuapp.com/', image: project3, subheader: 'React.JS / Node.JS / MongoDB'},
    ]

    const renderedProjects = projects.map((project, index)=> {
        return(
            <StyledGridItem key={index} item xs={12} sm={6} md={4}>
                <StyledCard>
                    <a target='_blank' rel="noopener noreferrer" href={project.url}>
                        <StyledCardMedia 
                            title={project.title}
                            image={project.image}
                        />    
                    </a>
                    <CardHeader 
                        title={project.title}
                        subheader={project.subheader}
                        subheaderTypographyProps={{'color': "initial"}}
                    />
                </StyledCard>
            </StyledGridItem>
        )
    })

    
    return(
        <StyledMain id='work'>
            <StyledContainer>
                <StyledTitle>MY WORK</StyledTitle> 
                <StyledGrid container>
                    {renderedProjects}
                </StyledGrid>  
            </StyledContainer>    
        </StyledMain>
    )
}

export default Work;