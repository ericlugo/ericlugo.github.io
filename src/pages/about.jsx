import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"

import PrimaryLayout from "../layout/Primary"
import ErrorCard from "../components/SVGCard"


export const query = graphql`
  query {
    allMdx(
      limit: 3,
      filter: {frontmatter: {slug: {glob: "random/*"}}},
      sort: {frontmatter: {edited_date: DESC}}
    ) {
      nodes {
        id
        frontmatter {
          slug
          description
          title
          edited_date(formatString: "YYYY-MM-DD")
        }
        excerpt
      }
    }
  }
`


const AboutPage = ({ data }) => {
  let nodes = undefined

  // check for available random blog nodes.
  // if none found display error card with friendly message.
  if (!data.allMdx.nodes.length) {
    nodes = <ErrorCard className="missingPosts" type="error">
      <h2>⚠️Oh No⚠️</h2>
      <p>
        Sorry, this site is still a work in progress, so there are no post about me yet! Please check back in soon since I'm actively adding to the different areas of this site as time goes by. Thanks for visiting! 😊
      </p>
    </ErrorCard>
  }
  else {
    nodes = data.allMdx.nodes.map(node => (
      <Link className="previewCard" to={'/'+node.frontmatter.slug} key={node.id}>
        <p className="mainHeader">{node.frontmatter.title}</p>
        <p className="subHeader">{node.frontmatter.description}</p>
        <p className="subText">Last Edited: {node.frontmatter.edited_date}</p>
        <p>{node.excerpt}</p>
      </Link>
    ))
  }
  
  return (
    <PrimaryLayout className="about" withNav={true} title="About Me">
      <h1 className="mainHeader">Oh, well hello there!</h1>
      <section>
        <p className="subHeader">
          I suppose you're looking for some more information about me?
        </p>
        <p className="subText">
          Hmmm, what can I say...
        </p>
        <p>
          Its kind of funny now that I think about it. The entirety of 90's... everyone panicking about the Y2K bug... Everything that I saw while growing up was influenced by technology in some way. Maybe just references, or special effects. Still, there was always something. Specially the influence of computers and the internet. Even so, due to life circumstances, I grew up without access to computers. So in my mind, even though technology always seemed interesting, it was so far outside of my "bubble" that I can't say I ever really understood its influence. I can certainly say that I never imagined myself working with any sort of technology. 
        </p>
        <p>
          It wasn't until late in middle school that I had my first contact with computers when I was thrown into a typing class. I sucked at it. I had no idea how on earth my classmates could type so fast but at the same time I was so very intrigued. Still, this seemed like a novelty --so I didn't pay attention-- but I was quite curious. It wasn't until highschool that I was able to delve into that curiosity. Our highschool offered Computer Science electives for college prep students and since I was ahead on my other subjects I felt it should be ok to test myself with something new. Our teacher was wonderful. Highly skilled, knowledgeable, and passionate. But most of all, patient. I was finally able to gain access to a home computer to do some work at home, and the floodgates of what I could do with technology were at least somewhat opened to me. During the next few years I got to learn the basics of OOP and I was introduced to C++ and Java along with various foundational concepts. I can't say I remember too many of my teachers, but Mr. Patel is definitely one of them. I left those classes with a love for technology and a yearning to learn more.
        </p>
        <p>
          Since then life has had its ups and downs, but that yearning never left me. Eventually, I found myself enrolled in LambdaSchool with the intent to become a Software Engineer and that's where the embers became a blaze. Previously, I had always felt like a lot of things couldn't click. I tried on many occasions to self-study so I had amassed some amount of knowledge, but due to life being its normal self, I was usually unable to put much time into really developing any of this knowledge. However, when I enrolled at LambdaSchool, a solid commitment was made to put as much of my time into growth as possible, and that commitment was met with a much greater ease of learning than I had ever experienced. With that growth, what was previously interest became passion.  
        </p>
        <p>
          Now, I'm a full-stack software engineer with a passion for making intentional, user-focused software. I tend to lean more toward front-end since I thoroughly enjoy bringing beautiful products to life through clean and well though out code. However, I love the complexity that working on the back-end allows. I also love the satisfaction that making complexity look simple brings, and I well understand that this can be found on both front and back of house. Software craftsmanship and UX design are in high regard to me, and I highly value the confidence that clean code brings to the table when working on a new project or maintaining an older one. I want to use my skills to make a positive impact that genuinely makes a difference. To that end, I aim to always shoot for a higher standard and always put a piece of myself into what I do.
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
