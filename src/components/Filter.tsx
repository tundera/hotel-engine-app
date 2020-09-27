import React from "react"

import { Select, Option } from "@reflexjs/ui"

const Filter = () => {
  return (
    <Select defaultValue="Hello" maxWidth="200px" m="2">
      <Option>Repos</Option>
      <Option>Users</Option>
      <Option>Rating</Option>
      <Option>Best Match</Option>
    </Select>
  )
}

export default Filter
