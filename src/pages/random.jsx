import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ErrorCard from "../components/ErrorCard"


export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {slug: {glob: "random/*"}}},
      sort: {frontmatter: {edited_date: DESC}}
    ) {
      nodes {
        frontmatter {
          slug
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


const RandomListPage = ({ data }) => {
  let nodes = undefined

  // check for available random blog nodes.
  // if none found display error card with friendly message.
  if (!data.allMdx.nodes.length) {
    nodes = <ErrorCard className="missingPosts">
      <h2>⚠️Oh No⚠️</h2>
      <p>
        Sorry, this site is still a work in progress, so there are no blog posts yet! Please check back in soon since I'm actively adding to the different areas of this site as time goes by. Thanks for visiting! 😊
      </p>
    </ErrorCard>
  }
  else {
    nodes = data.allMdx.nodes.map(node => (
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
  }

  return (
    <PrimaryLayout className="random" withNav={true}>
      <h1 className="mainHeader">My Random Thoughts</h1>
      <section>
        <p>
          Well, you ended up on this random corner of my site. Thanks for your curiosity. This area is just for me to post more personal items. I don't want to muddy the waters of my main blog so I prefer the idea of separating these items out into a sort of sub-area. Here you will find the following:
        </p>
        <ul>
          <li>
            <strong>Miscellaneous:</strong> Grab bag of mixed recommendations. From stationary, to woodworking tools, anything that I have loved using can find its home here.
          </li>
          <li>
            <strong>Personal Thoughts:</strong> This should be the home of my random musings. This may be reactions to articles that I've read, videos I've watched, books I've read, or any other thing that I've run into. If I'm referencing a source, it should be cited for context. All opinions stated are expressly my own. This is where I can be long-winded.
          </li>
          <li>
            <strong>Today in Awesome:</strong> Cool things that I've run into or experienced. Maybe I had an awesome day with the family and want to show it to the world. Or, maybe a silly doodle was completed. Nothing is to big or too small. If I think it is awesome, its game. No long write-ups. Just a few short thoughts on why it matters.
          </li>
          <li>
            <strong>Today I Learned:</strong> This is the same as the Blog Posts version except this can be about anything that is not STEAM related. Most likely this will end up being History related.
          </li>
        </ul>
      </section>
      <section className="previewList">
        { nodes }
      </section>
    </PrimaryLayout>
  )
}


export default RandomListPage


export const Head = () => <title>My Random Thoughts</title>
