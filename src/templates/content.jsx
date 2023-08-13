import React from "react"
import { graphql } from "gatsby"
import { MDXProvider } from "@mdx-js/react"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import Hero from "../components/Hero"
import ExternalLink from "../components/ExternalLink"
import CitationCard from "../components/CitationCard"
import ImageCard from "../components/ImageCard"


const shortcodes = {
  Link,
  ExternalLink,
  CitationCard,
  ImageCard,
}
const regex = /(^.*\/){1}/g
const regexName = /(^.*(?=\/))/g


export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        alt_title
        slug
        edited_date(formatString: "YYYY-MM-DD")
        category
        hero
        alt
      }
    }
  }
`


const ContentTemplate = ({ data, children }) => {
  const imgData = (data.mdx.frontmatter.hero && data.mdx.frontmatter.alt) ? {
    src: data.mdx.frontmatter.hero,
    alt: data.mdx.frontmatter.alt,
  } : false

  return (
    <PrimaryLayout className={imgData ? "content" : "content borderTop"} data={data} withNav={true} title={data.mdx.frontmatter.alt_title}>
      {imgData ? <Hero imgData={imgData}/> : ''}
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
}


export default ContentTemplate
