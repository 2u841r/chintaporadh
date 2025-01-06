import * as React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import { SEO } from "../components/SEO"
import { Helmet } from "react-helmet"
import config from "../utils/config"


const Index = ({ data }) => {
  // console.log(data)
  const articles = data.allMarkdownRemark.nodes

  return (
    <Layout>
      <Helmet title={`মূলপাতা | ${config.siteTitle}`} />
      <SEO />
      <h2 className="text-3xl font-bold text-center my-2"> চিন্তাপরাধ </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 grid-flow-row-dense">
        {articles.map(a => {
          const { an, title} = a.frontmatter;
          return (
            <Link to={`/${an}`} key={a.id} className="no-underline min-w-[200px] flex-grow">
              <div className="bg-white bg-opacity-25 hover:bg-opacity-50 transition-colors duration-300 p-4 rounded-lg h-full flex flex-col justify-between">
               
                <h1 className="text-xl font-bold my-2 overflow-hidden line-clamp-3">{title}</h1>
               
              </div>
            </Link>
          );
        })}
      </div>
    </Layout>
  )
}

export default Index

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {frontmatter: {an: ASC}}, filter: {frontmatter: {}}) {
    nodes {
      frontmatter {
        an
        title
      }
      id
    }
  }
}
  
`