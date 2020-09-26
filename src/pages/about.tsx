import React from "react"
import { Link } from "gatsby"
import { H1, P, Br, Flexbox, Div } from "@reflexjs/ui"
import Layout from "../layouts/Layout"

// import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <H1>About</H1>
    <P>This is the about page.</P>
    <Flexbox marginBottom="1.45rem" flexDirection="column">
      <Link to="/">Go back home</Link> <Br />
    </Flexbox>
  </Layout>
)

export default IndexPage
