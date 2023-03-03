import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ExternalLink from "../components/ExternalLink"
import CitationCard from "../components/CitationCard"


const shortcodes = { Link, ExternalLink, CitationCard }
const regex = /(^.*\/){1}/g
const regexName = /(^.*(?=\/))/g


export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        edited_date(formatString: "YYYY-MM-DD")
        category
      }
    }
  }
`


const ContentTemplate = ({ data, children }) => (
  <PrimaryLayout className="content" withNav={true}>
    <header className="contentHeader">
      <h1 className="mainHeader">{data.mdx.frontmatter.title}</h1>
      <p className="subText">Category: {data.mdx.frontmatter.category}</p>
      <p className="subText">Last Edited: {data.mdx.frontmatter.edited_date}</p>
    </header>
    <Link className="directoryLink" to={"/"+data.mdx.frontmatter.slug.match(regex)}>&lt; Go to {data.mdx.frontmatter.slug.match(regexName)} Directory</Link>
    <MDXProvider components={shortcodes}>
      {children}
    </MDXProvider>
    <Link className="directoryLink" to={"/"+data.mdx.frontmatter.slug.match(regex)}>&lt; Go to {data.mdx.frontmatter.slug.match(regexName)} Directory</Link>
  </PrimaryLayout>
)


export default ContentTemplate


export const Head = ({ data }) => <title>{data.mdx.frontmatter.title}</title>
