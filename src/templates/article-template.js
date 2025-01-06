import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'

import { useCopyLinkPopup } from '../utils/clipboard';
import { SEO } from '../components/SEO';
import { Helmet } from 'react-helmet';
import config from '../utils/config';

const ArticleDetails = ({ data }) => {
  const { showPopup, copyLinkToClipboard } = useCopyLinkPopup();
  const { html } = data.markdownRemark;
  const {  title } = data.markdownRemark.frontmatter;
  const post = data.markdownRemark;
  // console.log(post)
  return (
    <Layout>
      <Helmet title={`${title} | ${config.siteTitle}`} />
      <SEO postPath={`/articles/${post.frontmatter.an}`} postNode={post} postSEO />
      <div className="mt-5">
        {/* Category and Issue */}
        <div className="flex justify-between items-center mb-3 md:mb-5">
         
        </div>

        {/* Title and Popup */}
        <div className="relative">
          <h2 id='title'
            onClick={copyLinkToClipboard} onKeyDown={copyLinkToClipboard} role="presentation"
            className="text-2xl md:text-4xl cursor-pointer"
          >
            {title}
          </h2>

          {/* Popup message */}
          {showPopup && (
            <div className="absolute top-[-2rem] left-1/2 transform -translate-x-1/2 bg-green-500 text-white px-4 py-2 rounded shadow-lg">
              Link copied to clipboard!
            </div>
          )}

         
        </div>

        {/* Article Content */}
        <div
          className="mt-5"
          dangerouslySetInnerHTML={{ __html: html }}
        ></div>


        <div className='flex'>
        <Link to='#navbar' className='my-5'> ↑ উপরে যান </Link>
        </div>
      </div>
    </Layout>
  );
};


export default ArticleDetails;

export const query = graphql` 
query articleDetails($an: Int) {
  markdownRemark(frontmatter: {an: {eq: $an}}) {
    frontmatter {
      an
      title

    }
    html
  }
}
`