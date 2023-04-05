module.exports = {
  siteMetadata: {
    title: `Eric Lugo's Dev Blog`,
    siteUrl: `https://ericlugo.dev`,
  },
  plugins: [
    "gatsby-plugin-sass",
    "gatsby-plugin-mdx",
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": `${__dirname}/src/pages/`,
      },
      __key: "pages"
    },
    // Add a collection called "blog" that looks for files in content/blog
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/content/blog`,
      },
    },
    // Add a collection called "notes" that looks for files in content/notes
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `notes`,
        path: `${__dirname}/content/notes`,
      },
    },
    // Add a collection called "projects" that looks for files in content/projects
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/content/projects`,
      },
    },
    // Add a collection called "random" that looks for files in content/random
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `random`,
        path: `${__dirname}/content/random`,
      },
    },
  ]
}
