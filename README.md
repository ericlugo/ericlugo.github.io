<h2 align="center">Dev Blog</h2>
<h3 align="center">Heavily customized theme based on: <em>Gatsby minimal starter</em></h3>
<p align="center">
  <a href="https://www.gatsbyjs.com/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>

<hr><br><br>

## 🚀 Quick start

1.  **To get started**

    Make sure you have the correct dependencies in place. Ideally, do yourself a favor and make sure you're using `nvm` first! Then, you should be using `node LTS` and `gatsby-cli`.

    ```shell
    # Check Versions:
    nvm --version           # v0.39.2
    node --version          # v18.2.1
    gatsby --version        # v5.0.0

    
    # If any of the above are not installed, you can use the following steps...

    # NVM (more info here https://github.com/nvm-sh/nvm):
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

    # NODE:
    nvm ls-remote --lts     # lists available lts versions
    nvm install --lts       # installs latest lts version

    # GATSBY-CLI:
    npm install -g gatsby-cli
    ```

    Now it's time to clone the repo and do you first-time setup!
    
    ```shell
    # Navigate to your code directory first!
    git clone git@github.com:ericlugo/ericlugo.github.io.git
    cd ericlugo.github.io/
    npm install             # installs the project dependencies
    ```

2.  **Start developing**

    Navigate into your site’s directory and start it up!!!

    ```shell
    cd ericlugo.github.io/  # if you're note already in it...
    npm run dev
    ```

3.  **Open the code and start customizing**

    Your site is now running at <http://localhost:8000>

    You can view GraphiQL at <http://localhost:8000/___graphql>

    Other things to note:
    - Commit your changes as normal to the `master` branch.
    - You can always switch to other branches locally to work on new features if you want to though its not necessary.
    - Keep in mind nothing that you see during development will be visible until it is deployed!

4.  **Learn more about Gatsby**

    - [Documentation](https://www.gatsbyjs.com/docs/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Tutorials](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Guides](https://www.gatsbyjs.com/tutorial/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [API Reference](https://www.gatsbyjs.com/docs/api-reference/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Plugin Library](https://www.gatsbyjs.com/plugins?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)

    - [Cheat Sheet](https://www.gatsbyjs.com/docs/cheat-sheet/?utm_source=starter&utm_medium=readme&utm_campaign=minimal-starter)


5.  **To Deploy**

    Time to deploy some changes? Nice and easy from here!

    ```shell
    # build, add CNAME, push build directory to production branch, clean build artifacts
    npm run full-deploy
    ```
<hr><br/><br/>

## 🔎 A Closer Look
6.  **About the Project**

    # ericlugo.dev (ericlugo.github.io)
    This is my personal website, to be used as a creative outlet/portfolio piece.

    ## Content and Layout:

    There are a few different items that I'd like to showcase on the site so it will be split into sections as follows:

    ---

    ### Projects:
    This will consist of things which I have created and want to showcase. Very likely, these will either be standalone websites (like fathering.me), or project pieces on CodePen. I will be posting items under the categories of `Showcase`, `Retrospective`, or `Deep Dive`. This directory page should be a nice modern masonry page with cards that showcase either screenshots (for Retrospectives), cleanly presented previews (for Showcases), or Bold Title Cards (for Deep Dives). 
    - **Showcase**:
    This should include a clean write-up of the created project and the who, what, where, when, and why of it. It should also include a Tech Stack breakdown where possible.
    - **Retrospective**:
    Posts that reference `Showcase` pieces and discuss honest introspection regarding pain points and things that I'd like to improve or expand upon in the future.
    - **Deep Dive**:
    In-depth posts where I go all-in to chosen topics in order to gain a deeper understanding. Initially I thought these would go under Blog Posts, but that should be reserved for shallower initial looks into topics. By the time I do a deep dive, it is likely that I will have engaged in various small projects for the sake of diving deeper so having a pre-defined place to post more extended content makes sense here.
        ```
        TL;DR: These should effectively be `Feynman Notes` of my studies in order to thoroughly crystallize the understanding of the topics I've covered.
        ```

    ---

    ### Notes:
    This is the home for recommendations. From YouTube creators to awesome blogs, if I find it useful, I will try and make it a point to showcase it here and redirect to it. It's unlikely that this site will ever get much traffic but on the off-chance, I'd love to be able to send some traffic to the people I have found helpful along my journey! This directory page will effectively be just a long list of links with their category as a part of the title (e.g. `Framework: Solid.js`).
    - **Resource**:
    Various educational resources and what I found while digging through them.
    - **Tool**:
    Awesome technologies that I've run into that may prove useful to others.

    ---

    ### Blog Posts:
    The majority of the site's content will most likely live here (y'know... since, this is my personal blog...) so it will be split into several categories. This directory will be a list of short cards that display a `title`, `date of publication`, `estimated reading time` (in increments of 5mins), `category` label, and `tags`.
    - **How to Dev**:
    This is the home of my random musings regarding tech. As I learn new skills short write-ups and explanations can be created and should be flagged with this category.
    - **Today I Learned**:
    Awesome things that I've LEARNED and I believe others may benefit from learning if they don't already know about it. It should be limited to STEAM topics!
    - **Code Challenges**:
    I will be trying to engage in daily code challenges. These will be time-limited in order to encourage a more active challenge. Usually they will be completed in JS but this is likely to begin to move to Python and other languages in the future. For each of these I should do mini write-ups with my thought process and methodology. Also consider including where I believe I can improve on future attempts.
    - **Technical Experiments**:
    Welcome to my Laboratory!!! This is the home for me trying crazy new things. Usually this will pertain to trying techniques on the bleeding edge of CSS since that is one of the areas of my interest. As my expertise grows, this will simply be the home of where I post about random attempts at achieving things I imagine (regardless of success since I believe there is value in recording failure).
    - **Generative Designs**:
    I can showcase designs and experiments relating to GD here. Since this is directly related to my Developer aspirations, it belongs here rather than in `Today In Awesome`.

    ---

    ### About:
    Just a single simple page where I can give a brief intro to who I am, what I'm interested in, what my hopes are, and how to get a hold of me. I actually want to have a simple personal blog tucked away in here where I can post random musings and other things that are important to me so the latest three items from the "hidden" blog can show up here along with a link to a directory page for `the "hidden" blog`.

    ---

    ### The "Hidden" Blog:
    This is just a place for more personal items. I don't want to muddy the waters of my main blog so I prefer the idea of separating these items.
    - **Miscellaneous**:
    Grab bag of mixed recommendations. From stationary, to woodworking tools, anything that I have loved using can find its home here.
    - **Personal Thoughts**:
    This should be the home of my random musings. This may be reactions to articles that I've read, videos I've watched, books I've read, or any other thing that I've run into. If I'm referencing a source, it should be cited for context. All opinions stated are expressly my own. This is where I can be long-winded.
    - **Today in Awesome**:
    Cool things that I've run into or experienced. Maybe I had an awesome day with the family and want to show it to the world. Or, maybe a silly doodle was completed. Nothing is to big or too small. If I think it is awesome, its game. No long write-ups. Just a few short thoughts on why it matters.
    - **Today I Learned**:
    This is the same as the Blog Posts version except this can be about anything that is not STEAM related. Most likely this will end up being History related.