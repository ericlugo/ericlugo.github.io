import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"

const shortcodes = { Link }
const regex = /(^.*\/){1}/g


export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
    }
  }
`


const ContentTemplate = ({ data, children }) => (
  <PrimaryLayout className="content" withNav={true}>
    <h1 className="mainHeader">{data.mdx.frontmatter.title}</h1>
    <Link to={"/"+data.mdx.frontmatter.slug.match(regex)}>Go to Directory</Link>
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
  </PrimaryLayout>
)


export default ContentTemplate


export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>
