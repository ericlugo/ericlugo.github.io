import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ErrorCard from "../components/SVGCard"


export const query = graphql`
  query {
    allMdx(
      filter: {frontmatter: {slug: {glob: "blog/*"}}},
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


const BlogListPage = ({ data }) => {
  let nodes = undefined

  // check for available blog post nodes.
  // if none found display error card with friendly message.
  if (!data.allMdx.nodes.length) {
    nodes = <ErrorCard className="missingPosts" type="error">
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
    <PrimaryLayout className="blog" withNav={true} title="My Dev Blog">
      <h1 className="mainHeader">My Dev Blog</h1>
      <section>
        <p>
          Welcome to my personal blog! Thanks for visiting. You can think of this part of the site of something like my digital notebook. This is the place where I post all of my STEAM-related thoughts as well as some notes and insights as I learn new skill and test things out. Here's the categories you'll run into here:
        </p>
        <ul>
          <li>
            <strong>How to Dev:</strong> This is the home of my random musings regarding tech. As I learn new skills short write-ups and explanations can be created and should be flagged with this category.
          </li>
          <li>
            <strong>Today I Learned:</strong> Awesome things that I've LEARNED and I believe others may benefit from learning if they don't already know about it. It should be limited to STEAM topics!
          </li>
          <li>
            <strong>Code Challenges:</strong> I will be trying to engage in daily code challenges. These will be time-limited in order to encourage a more active challenge. Usually they will be completed in JS but this is likely to begin to move to Python and other languages in the future. For each of these I should do mini write-ups with my thought process and methodology. Also consider including where I believe I can improve on future attempts.
          </li>
          <li>
            <strong>Technical Experiments:</strong> Welcome to my Laboratory!!! This is the home for me trying crazy new things. Usually this will pertain to trying techniques on the bleeding edge of CSS since that is one of the areas of my interest. As my expertise grows, this will simply be the home of where I post about random attempts at achieving things I imagine (regardless of success since I believe there is value in recording failure).
          </li>
          <li>
            <strong>Generative Designs:</strong> I can showcase designs and experiments relating to GD here. Since this is directly related to my Developer aspirations, it belongs here rather than in <span className="label">Today In Awesome</span>.
          </li>
        </ul>
      </section>
      <section className="previewList">
        {nodes}
      </section>
    </PrimaryLayout>
  )
}


export default BlogListPage
