import React from "react"
import PropTypes from "prop-types"
import { Footer, Div, Main, A } from "@reflexjs/ui"
import { css } from "theme-ui"
import Header from "../components/Header"
import HotelEngineLogo from "../images/hotel-engine-logo.svg"
import useSiteMetadata from "../hooks/useSiteMetadata"

type LayoutProps = {
  children: React.ReactNode
}

const logoCss = css({
  "& path": {
    fill: "white",
  },
})

const Layout = ({ children }: LayoutProps) => {
  const { title } = useSiteMetadata()

  return (
    <>
      <Header siteTitle={title || `Hotel Engine Sample`} />
      <Div
        minHeight="80vh"
        margin="0 auto"
        maxWidth="960"
        padding="0 1.0875rem 1.45rem"
      >
        <Main>{children}</Main>
      </Div>
      <Footer textAlign="center" marginTop="2rem" maxHeight="20">
        <Div css={logoCss}>
          <HotelEngineLogo />
        </Div>
        © {new Date().getFullYear()}, Made by
        {` `}
        <A href="https://github.com/tundera">@tundera</A>
      </Footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
