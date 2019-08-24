import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Intro from '../components/Home/Intro';
import Work from '../components/Home/Work';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro />
    <Work />
  </Layout>
)

export default IndexPage
