import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"

const shortcodes = { Link }


export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
      }
    }
  }
`


const ContentTemplate = ({ data, children }) => (
  <PrimaryLayout className="content">
    <h1 className="mainHeader">{data.mdx.frontmatter.title}</h1>
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
  </PrimaryLayout>
)


export default ContentTemplate


export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>
