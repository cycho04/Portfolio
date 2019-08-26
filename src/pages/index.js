import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/Home/Intro';
import Work from '../components/Home/Work';
import About from '../components/Home/About';
import Contact from '../components/Home/Contact';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Work />
    <About />
    <Contact />
  </Layout>
)

export default IndexPage
