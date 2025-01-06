import React from 'react'
import Layout from "../components/Layout"
import { Helmet } from "react-helmet"
import { SEO } from "../components/SEO"
import config from "../utils/config"

const about = () => {
     return (
          <Layout>
               <Helmet title={`পরিচিতি | ${config.siteTitle}`} />
               <SEO />
               <h2 className="text-3xl font-bold text-center my-2">পরিচিতি</h2>

               <div>
                    <h1 className='text-2xl text-blue-600'> চিন্তাপরাধ </h1>
                    <p className='my-4'>
                         ...
                    </p>
                   
               </div>
          </Layout>
     )
}

export default about