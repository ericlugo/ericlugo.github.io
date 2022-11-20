<h2 align="center">Dev Blog</h2>
<h3 align="center">Based on: <em>Gatsby minimal starter</em></h3>
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
