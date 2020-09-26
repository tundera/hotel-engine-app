const React = require("react")
const { QueryCache, ReactQueryCacheProvider } = require("react-query")
const { ReactQueryDevtools } = require("react-query-devtools")

const queryCache = new QueryCache()

exports.wrapRootElement = ({ element }) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      {element}
      {process.env.NODE_ENV === "development" ? (
        <ReactQueryDevtools initialIsOpen={false} />
      ) : null}
    </ReactQueryCacheProvider>
  )
}
