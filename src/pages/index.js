import * as React from "react";
import { Link } from "gatsby";

import Layout from "../layout/Home";
import MainNav from "../components/lib/MainNav";
import '../sass/index.scss';


const Body = ({className, children}) => (
  <main className={className}>
    {children}
  </main>
);


const IndexPage = () => (
  <Layout>
    <Body className="widthContainer">
      <section>
        <h1>
          Hi, I'm <span className="glitch" data-text="Eric">Eric</span>.
        </h1>
        <p>
          I like to make stuff, and I'm working to get better at explaining things to other people!
        </p>
        <MainNav className="mainNav" />
        <p>
          If you want to see some of the stuff I've made, you can go to <Link to="/projects/">Projects</Link>.
          Want to read some of the things I've tried explaining? Click on <Link to="/blog/">Blog</Link>.
          For random things I recommend you can check out <Link to="/notes/">Notes</Link>.
        </p>
        <p>
          Thanks for visiting, and I sincerely hope you have a wonderful day.
        </p>
      </section>
    </Body>
  </Layout>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
