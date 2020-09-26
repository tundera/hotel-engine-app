import dotenv from "dotenv"
import { Config } from "@gqless/cli"

dotenv.config({
  path: `env.${process.env.NODE_ENV}`,
})

const config: Config = {
  url: "https://api.github.com/graphql",
  outputDir: "./src/graphql",
  headers: {
    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
  },
}

export default config
