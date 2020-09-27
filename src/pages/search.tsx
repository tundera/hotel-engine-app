import React, { useEffect, useState } from "react"
import { useInput } from "react-hanger"
import axios from "axios"

import { Link } from "gatsby"
import { H1, Input, Flexbox, Container } from "@reflexjs/ui"
import Filter from "../components/Filter"
import Button from "../components/Button"
import Layout from "../layouts/Layout"
import SEO from "../components/seo"
import SearchResults, { SearchFilterKey } from "../components/Results"

const SearchPage = () => {
  // const cache = useQueryCache()
  const newSearch = useInput("")
  const [input, setInput] = useState("")
  const [filters, setFilters] = useState<SearchFilterKey[]>([
    "REPOSITORY",
    "ISSUE",
    "USER",
  ])

  const handleSearch = async () => {
    setInput(newSearch.value)
  }

  return (
    <Layout>
      {/* <SEO title="Search" /> */}
      <Container>
        <H1>GitHub Search</H1>
        <Filter />
        <Flexbox py="4" justifyContent="space-around">
          <Input
            type="text"
            m="2"
            placeholder="Enter search text"
            aria-label="GitHub search input"
            {...newSearch.eventBind}
          />
          <Button onClick={handleSearch} disabled={!newSearch.hasValue}>
            Search
          </Button>
        </Flexbox>{" "}
        <SearchResults input={input} filters={filters} />
        <Link to="/">Go back to the homepage</Link>
      </Container>
    </Layout>
  )
}

export default SearchPage
