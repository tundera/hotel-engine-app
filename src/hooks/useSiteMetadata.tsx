import { graphql, useStaticQuery } from "gatsby"

// Type hook output
export interface SiteMetadata {
  title: string
  description: string
  author: string
}

function useSiteMetadata(): SiteMetadata {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
        }
      }
    }
  `)

  // Return directly wanted data
  return data.site.siteMetadata
}

export default useSiteMetadata
