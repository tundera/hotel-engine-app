import { Client, QueryFetcher } from "gqless"
import { schema, Query } from "./generated"

const endpoint = "https://api.github.com/graphql"

const fetchQuery: QueryFetcher = async (query, variables) => {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer a20295620514902d377c007e2e0acec0ffc8ef21"
    },
    body: JSON.stringify({
      query,
      variables
    }),
    mode: "cors"
  })

  if (!response.ok) {
    throw new Error(`Network error, received status code ${response.status}`)
  }

  const json = await response.json()

  return json
}

export const client = new Client<Query>(schema.Query, fetchQuery)

export const query = client.query
