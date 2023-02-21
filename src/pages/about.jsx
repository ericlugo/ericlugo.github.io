import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"


export const query = graphql`
  query {
    allMdx(limit: 3, filter: {frontmatter: {slug: {glob: "random/*"}}}) {
      nodes {
        id
        frontmatter {
          slug
          created_date(formatString: "YYYY-MM-DD")
          description
          title
        }
        excerpt
      }
    }
  }
`


const AboutPage = ({ data }) => {
  const nodes = data.allMdx.nodes.map(node => (
    <Link className="previewCard" to={'../'+node.frontmatter.slug} key={node.id}>
      <p className="mainHeader">{node.frontmatter.title}</p>
      <p className="subHeader">{node.frontmatter.description}</p>
      <p className="subText">Written On: {node.frontmatter.created_date}</p>
      <p>{node.excerpt}</p>
    </Link>
  ))

  return (
    <PrimaryLayout className="about">
      <h1 className="mainHeader">Oh, well hello there!</h1>
      <section>
        <p className="subHeader">
          I suppose you're looking for some more information about me?
        </p>
        <p className="subText">
          Hmmm, what can I say...
        </p>
        <p>
          I'm a full-stack developer with a passion for making intentional, user-focused software. I thoroughly enjoy basically all things front-end and I absolutely love bringing beautiful products to life through clean and well though out code. Software craftsmanship and UX design are in high regard to me, and I highly value the confidence that clean code brings to the table when working on a new project or maintaining an older one.
        </p>
        <p>
          If you'd like to read a few of my personal thoughts you can check out some of the posts below!
          <br />
          Or, you can click or tap <Link to="/random/">HERE</Link> to see more personal posts.
        </p>
      </section>
      <section>
        <p className="subHeader">
          Thanks again for visiting my site!
        </p>
        <p className="subText">
          On the off-chance that you're reading this... <strong>Thanks Mr. Patel!</strong> Wherever you are now, I hope you know you made a difference!
        </p>
      </section>
      <h2 className="subHeader">Latest Random Posts:</h2>
      <section className="previewList">
        { nodes }
      </section>
    </PrimaryLayout>
  )
}


export default AboutPage


export const Head = () => <title>About Page</title>
