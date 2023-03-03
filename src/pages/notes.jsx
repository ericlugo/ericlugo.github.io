import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"


export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {slug: {glob: "notes/*"}}}
      sort: {frontmatter: {edited_date: DESC}}
    ) {
      nodes {
        frontmatter {
          slug
          created_date(formatString: "YYYY-MM-DD")
          description
          title
          edited_date(formatString: "YYYY-MM-DD")
          category
        }
        excerpt
        id
      }
    }
  }
`


const NoteListPage = ({ data }) => {
  const nodes = data.allMdx.nodes.map(node => (
    <Link className="previewCard" to={'/'+node.frontmatter.slug} key={node.id}>
      <header className="previewHeader">
        <p className="mainHeader">{node.frontmatter.title}</p>
        <p className="subHeader">{node.frontmatter.description}</p>
      </header>
      <section className="previewBody">
        <p>{node.excerpt}</p>
      </section>
      <footer className="previewFooter">
        <p className="subText">Category: {node.frontmatter.category}</p>
        <p className="subText">Last Edited: {node.frontmatter.edited_date}</p>
      </footer>
    </Link>
  ))

  return (
    <PrimaryLayout className="notes" withNav={true}>
      <h1 className="mainHeader">Miscellaneous Recommendations</h1>
      <section>
        <p>
          From YouTube creators to awesome blogs, if I find it useful, I will try and make it a point to showcase it here and redirect to it. It's unlikely that this site will ever get much traffic but on the off-chance, I'd love to be able to send some traffic to the people I have found helpful along my journey! Here's the categories you'll run into here:
        </p>
        <ul>
          <li>
            <strong>Resource:</strong> Various educational resources and what I found while digging through them.
          </li>
          <li>
            <strong>Tool:</strong> Awesome technologies that I've run into that may prove useful to others.
          </li>
        </ul>
      </section>
      <section className="previewList">
        { nodes }
      </section>
    </PrimaryLayout>
  )
}


export default NoteListPage


export const Head = () => <title>Miscellaneous Recommendations</title>
