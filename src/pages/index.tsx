import React from "react"
import { Link } from "gatsby"
import { H1, P, Br, Flexbox, Div } from "@reflexjs/ui"
import { jsx, css, useThemeUI } from "theme-ui"
import Layout from "../layouts/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import HotelEngineLogo from "../images/hotel-engine-logo.svg"

const IndexPage = () => (
  <Layout>
    {/* <SEO title="Home" /> */}
    <H1>Home</H1>
    <P>This is the home page.</P>
    <Flexbox marginBottom="1.45rem" flexDirection="column">
      <Link to="/search">Go to the search page</Link> <Br />
    </Flexbox>
  </Layout>
)

export default IndexPage
