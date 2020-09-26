import { Link } from "gatsby"
import React from "react"
import { useThemeUI } from "theme-ui"
import { Header as HeaderComponent, P, Flexbox } from "@reflexjs/ui"
import NavMenu from "./NavMenu"

type HeaderProps = {
  siteTitle: string
}

const Header: React.FC<HeaderProps> = ({ siteTitle }: HeaderProps) => {
  const { theme } = useThemeUI()

  return (
    <HeaderComponent
      background={theme.colors?.muted}
      mb="1.45rem"
      px="4"
      minHeight="10vh"
      position="sticky"
      zIndex="1000"
      top="0"
    >
      <Flexbox>
        <Link to="/" style={{ textDecoration: "none" }}>
          <P
            bg={theme.colors?.muted}
            hoverOpacity="50%"
            p="2"
            color="#FFFFFF"
            fontSize="24"
            fontWeight="bold"
          >
            {siteTitle}
          </P>
        </Link>
        <NavMenu />
      </Flexbox>
    </HeaderComponent>
  )
}

export default Header
