import React from 'react';
import styled from 'styled-components';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import project1 from '../../images/software.jpg';
import project2 from '../../images/youtube.jpg';
import project3 from '../../images/casino.jpg';
import TrendingUp from '@material-ui/icons/TrendingUp';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faDice } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {device} from '../../styles/media';

// import {StaticQuery, graphql} from 'gatsby';
// import Img from 'gatsby-image';
// import BackgroundImage from 'gatsby-background-image';



// const Work = () => {
//     return(
//         <StaticQuery 
//             query={  
//                 graphql`{
//                     casino:file(relativePath:{eq:"casino.jpg"}) {    childImageSharp {      fluid(maxWidth: 1600) {        ...GatsbyImageSharpFluid      }    }  }
//                 }`}   
//             render={(data) => 
//                 (    <>      
//                         <Img   fluid={data.casino.childImageSharp.fluid}  alt=""/>   
//                     </>  
//             )}/>

//     )
// }











const StyledMain = styled.div`

`

const StyledContainer = styled(Container)`
    height: auto;
    min-height: 300px;
`

const StyledTitle = styled.h2`
    padding-top: 3rem !important;
    text-align: center;
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
    padding-left: 0.2rem;
    padding-right: 0.2rem;
    @media ${device.mobile}{
        padding-left: 0.5rem;
        padding-right: 0.5rem;
    }
`

const StyledAvatar = styled(Avatar)`
    background-image: linear-gradient(black, #FFFDE4);
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
    color: white;
`

const Work = () => {

    const projects = [
        {title: 'LaMar Software', url: 'https://cocky-pare-e0db29.netlify.com/', image: project1, subheader: 'Gatsby.JS / GraphQL / Material UI'},
        {title: 'YouTube Copy', url: 'https://my-youtube-mock.herokuapp.com/', image: project2, subheader: 'React.JS / Axios.JS / REST API'},
        {title: 'Learn to Play Baccarat', url: 'https://young-garden-64652.herokuapp.com/', image: project3, subheader: 'React.JS / Node.JS / MongoDB'},
    ]

    const renderedProjects = projects.map((project)=> {
        return(
            <StyledGridItem item xs={12} sm={6} md={4}>
                <StyledCard>
                    <a target='_blank' href={project.url}>
                        <StyledCardMedia 
                            title={project.title}
                            image={project.image}
                        />    
                    </a>
                    <CardHeader 
                        title={project.title}
                        subheader={project.subheader}
                        subheaderTypographyProps={{'color': 'white'}}
                    />
                </StyledCard>
            </StyledGridItem>
        )
    })

    
    return(
        <StyledMain>
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