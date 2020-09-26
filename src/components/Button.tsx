import React from "react"

import { Button as BaseButton } from "@reflexjs/ui"

const Button = ({ ...props }) => {
  return <BaseButton {...props} maxWidth="200px" m="2" />
}

export default Button
