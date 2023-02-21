const path = require("path")
const contentTemplate = path.resolve(`./src/templates/content.jsx`)
const FilterWarningsPlugin = require("webpack-filter-warnings-plugin")


exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('There was an error loading MDX files!', result.errors)
  }

  // Create content pages using the slugs as the paths.
  const contentNodes = result.data.allMdx.nodes
  contentNodes.forEach(node => {
    createPage({
      path: node.frontmatter.slug,
      component: `${contentTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    })
  })
}


exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new FilterWarningsPlugin({
        exclude: /mini-css-extract-plugin[^]*Conflicting order. Following module has been added:/,
      })
    ]
  })
}