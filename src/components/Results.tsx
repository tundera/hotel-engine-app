import React, { Suspense, useState, useEffect } from "react"
import { H2, Pre, Code, Flexbox, Button, Div } from "@reflexjs/ui"
import { Spinner, Container } from "theme-ui"
import { graphql, useVariable } from "@gqless/react"

import useDebounce from "../hooks/useDebounce"
import { query } from "../graphql"

export type SearchFilterKey = "REPOSITORY" | "ISSUE" | "USER"

type Props = {
  input: string
  filters: SearchFilterKey[]
}

const SearchResults: React.FC<Props> = graphql(({ input, filters }) => {
  const [searchFilters, setSearchFilters] = useVariable(filters)
  const [searchTerm, setSearchTerm] = useVariable(input)
  const [isSearching, setIsSearching] = useState(false)
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const [page, setPage] = useState(0)
  const [results, setResults] = useState([])

  useEffect(() => {
    if (searchTerm) {
      const response = query.search.arguments({})
    }
  })

  useEffect(() => {
    if (filters) {
      const newFilters = [...filters]
      setSearchFilters(newFilters)
    }
  })

  useEffect(() => {
    if (input) {
      setSearchTerm(input)
    }
  }, [input])

  // Effect for API call
  useEffect(
    () => {
      const searchGitHub = async () => {
        const result = query.search({ searchTerm, filters })
      }
      if (debouncedSearchTerm) {
        setIsSearching(true)
        searchGitHub(debouncedSearchTerm).then(results => {
          setIsSearching(false)
          setResults(results)
        })
      } else {
        setResults([])
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  )

  return (
    <Container defaultValue="Hello" sx={{ maxWidth: "200px", m: "2" }}>
      <H2>Results for '{input}'</H2>
      <Flexbox minW="100px">
        {isSearching ? (
          <Div>Searching...</Div>
        ) : (
          <Suspense
            fallback={<Spinner title="Loading..." size="64" />}
          ></Suspense>
        )}
        <span>Current Page: {page + 1}</span>
        <Button
          onClick={() => setPage(old => Math.max(old - 1, 0))}
          disabled={page === 0}
        >
          Previous Page
        </Button>{" "}
        <Button
          onClick={() =>
            // Here, we use `latestData` so the Next Page
            // button isn't relying on potentially old data
            setPage(old => (!latestData || !latestData.hasMore ? old : old + 1))
          }
          disabled={!latestData || !latestData.hasMore}
        >
          Next Page
        </Button>
        {
          // Since the last page's data potentially sticks around between page requests,
          // we can use `isFetching` to show a background loading
          // indicator since our `status === 'loading'` state won't be triggered
          isFetching ? <span> Loading...</span> : null
        }
      </Flexbox>
    </Container>
  )
})

export default SearchResults
