<h1 align="center">
  Hotel Engine Sample
</h1>

Search public and private GitHub repos. This app is built with Gatsby, Vercel, and GraphQL and integrates with the GitHub API v4.

> **IMPORTANT** This project is incomplete. Currently, the GraphQL API returns data which is available to the client, but this data currently is not used in any rendered client-side code. This would likely need to be mapped out in a list of search result components. Also, a statically generated path should be added or updated to create our pages that show an individual repostiory view. To do that, use Next.js' [dynamic routing](https://nextjs.org/docs/routing/dynamic-routes) features to create a server-side-rendered page.

> NOTE: Private repositories are not searchable by default. Replace the GITHUB_API_TOKEN enviornment variable in the `.env` file with your own personal access token from GitHub to allow searches against your private GitHub repositories.

## 🚀 Quick start

1. Run `yarn dev`

> Note if you use OSX, you can add breakpoints in VSCode for debugging. Just hit `F5` while running `yarn dev` to debug client and server-side code within VSCode.
