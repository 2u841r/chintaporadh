import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

const Layout = ({ children }) => {

  return (
    <div className="flex flex-col min-h-screen w-full px-8 box-border max-w-7xl mx-auto">
      <Navbar />
      <div className="flex-grow mt-2 mb-2">
        {children}
      </div>
      <footer className="mt-auto text-center py-5">
        <div>
          <p> কপিরাইট © চিন্তাপরাধ</p>
          <p>
            Developed by&nbsp;
            <a
              className="text-green-600"
              href="https://zubairiz.com"
              target="_blank"
              rel="noreferrer"
            >
              Zubair Ibn Zamir
            </a>{' '}
            -{' '}
            <a
              className="text-green-700"
              href="https://zmt3.com"
              target="_blank"
              rel="noreferrer"
            >
              ZMT3
            </a>
          </p>
          <a
            className="text-blue-500"
            href="https://github.com/2u841r/"
            target="_blank"
            rel="noreferrer"
          >
            source code on GitHub
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Layout
