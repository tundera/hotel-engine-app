import { graphql } from "@octokit/graphql"
import { NowRequest, NowResponse } from "@vercel/node"

export default async (req: NowRequest, res: NowResponse) => {
  const { owner, name, token } = req.body
  const { repository } = await graphql(
    `
      query GitHubRepository($owner: ${owner} , $name: ${name} ) {
        repository(owner: $owner, name: $name) {
          name
          description
          issues(last: 3) {
            edges {
              node {
                title
              }
            }
          }
        }
      }
    `,
    {
      headers: {
        authorization: `${token}`,
      },
    }
  )

  res.status(200).send(repository)
}
