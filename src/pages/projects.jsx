import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ErrorCard from "../components/SVGCard"


export const query = graphql`
  query {
    projects: allMdx(
      limit: 3,
      filter: {frontmatter: {slug: {glob: "projects/*"}, category: {eq: "Project"}}},
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
    whiteboard: allMdx(
      filter: {frontmatter: {slug: {glob: "projects/*"}, category: {nin: "Project"}}},
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


const ProjectListPage = ({ data }) => {
  let projects = undefined;
  let whiteboard = undefined;

  // check for available project nodes.
  // if none found display error card with friendly message.
  if (!data.projects.nodes.length) {
    projects = <ErrorCard className="missingPosts" type="error">
      <h2>⚠️Oh No⚠️</h2>
      <p>
        Sorry, this site is still a work in progress, so there are no Projects being showcased just yet! Please check back in soon since I'm actively adding to the different areas of this site as time goes by, and this is the first place I'll be adding some content to. Thanks for visiting! 😊
      </p>
    </ErrorCard>
  }
  else {
    projects = data.projects.nodes.map(node => (
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
  
  // check for available whiteboard nodes.
  // if none found display error card with friendly message.
  if (!data.projects.nodes.length) {
    whiteboard = <ErrorCard className="missingPosts" type="error">
      <h2>⚠️Oh No⚠️</h2>
      <p>
        Sorry, this site is still a work in progress, so there are no deep dives or retrospectives available here just yet! Please check back in soon since I'm actively adding to the different areas of this site as time goes by. Thanks for visiting! 😊
      </p>
    </ErrorCard>
  }
  else {
    whiteboard = data.whiteboard.nodes.map(node => (
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
    <PrimaryLayout className="projects" withNav={true} title="My Projects">
      <h1 className="mainHeader">My Projects</h1>
      <section>
        <p>
          Thanks for visiting my projects page! I think that to truly get to know a person's work you have to see a little more than just a few pictures. In a perfect world, you'd actually get a glimpse into how their mind works. This page is my attempt to do that for myself so I have split it into two parts as follows:
        </p>
      </section>
      <h2 className="subHeader">Creations Showcase:</h2>
      <section>
        <p>
          Here you will find some previews to some of the work that I have done (at least what can be shared publicly), and some projects that I've made for fun to work on specific skill sets or tech stacks. Clicking on a preview will take you to a clean write-up of the created project and the who, what, where, when, and why of it. It should also include a Tech Stack breakdown where possible.
        </p>
      </section>
      <section className="previewList">
        { projects }
      </section>
      <h2 className="subHeader">The Whiteboard:</h2>
      <section>
        <p>
          Where the first section could be considered "show", this section is the "tell". If you want to get a closer look at how I think --and at my attempts to gain a better understanding of technology and crystalize said understanding to be able to teach it to others-- then this is the place to be. Here you will find the following categories:
        </p>
        <ul>
          <li>
            <strong>Retrospective:</strong> Posts that reference <span className="label">Showcase</span> pieces and discuss honest introspection regarding pain points and things that I'd like to improve or expand upon in the future.
          </li>
          <li>
            <strong>Deep Dive:</strong> In-depth posts where I go all-in to chosen topics in order to gain a deeper understanding. Initially I thought these would go under Blog Posts, but that should be reserved for shallower initial looks into topics. By the time I do a deep dive, it is likely that I will have engaged in various small projects for the sake of diving deeper so having a pre-defined place to post more extended content makes sense here.
            <br/>
            <p className="tldr">
              TL;DR: These should effectively be `Feynman Notes` of my studies in order to thoroughly crystallize the understanding of the topics I've covered.
            </p>
          </li>
        </ul>
      </section>
      <section className="previewList">
        { whiteboard }
      </section>
    </PrimaryLayout>
  )
}


export default ProjectListPage
