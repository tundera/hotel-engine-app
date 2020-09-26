import React from "react"
import { Flexbox, Ul, Li } from "@reflexjs/ui"
import { Link } from "gatsby"
import { useThemeUI } from "theme-ui"

const NavMenu = () => {
  const { theme } = useThemeUI()

  return (
    <Ul listStyleType="none">
      <Flexbox alignItems="center" fontWeight="bold">
        <Li hoverOpacity="50%" mx="2" px="2">
          <Link to="/" style={{ color: "#FFFFFF", textDecoration: "none" }}>
            Home
          </Link>
        </Li>
        <Li hoverOpacity="50%" mx="2" px="2">
          <Link
            to="/search"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            Search
          </Link>
        </Li>
        <Li hoverOpacity="50%" mx="2" px="2">
          <Link
            to="/about"
            style={{ color: "#FFFFFF", textDecoration: "none" }}
          >
            About
          </Link>
        </Li>
      </Flexbox>
    </Ul>
  )
}

export default NavMenu
