import React, { useState, useCallback } from "react"
import { H2, Pre, Code, Flexbox, Button } from "@reflexjs/ui"
import { Container } from "theme-ui"
import { graphql, useVariable } from "@gqless/react"

type FilterKey = "REPOSITORY" | "ISSUE" | "USER"

type Props = {
  input: string
  filters: FilterKey[]
}

// const query = graphql`
//   query RepositoriesQuery {
//     github {
//       search(query: $search, type: REPOSITORY, first: 10) {
//         nodes {
//           ... on GitHub_Repository {
//             name
//             forkCount
//             stargazerCount
//           }
//         }
//         repositoryCount
//       }
//     }
//   }
// `

const SearchResults: React.FC<Props> = graphql(({ input }) => {
  const [search, setSearch] = useVariable("")
  const [filters, setFilters] = useState<>([])

  const [page, setPage] = useState(0)

  return (
    <Container defaultValue="Hello" sx={{ maxWidth: "200px", m: "2" }}>
      <H2>Results</H2>
      <Flexbox minW="100px">
        {status === "loading" ? (
          <div>Loading...</div>
        ) : status === "error" ? (
          <div>Error: {error.message}</div>
        ) : (
          // `resolvedData` will either resolve to the latest page's data
          // or if fetching a new page, the last successful page's data
          <div>
            {resolvedData.projects?.map(project => (
              <p key={project.id}>{project.name}</p>
            ))}
          </div>
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
