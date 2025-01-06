const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    query Articles {
      allMarkdownRemark {
        nodes {
          frontmatter {
            an
            title
          }
        }
      }
    }
  `)

  // Create pages for articles, issues, authors, and categories
  data.allMarkdownRemark.nodes.forEach(node => {
    createPage({
      path: '/' + node.frontmatter.an,
      component: path.resolve('./src/templates/article-template.js'),
      context: { an: node.frontmatter.an }
    })

    
  })

  
}