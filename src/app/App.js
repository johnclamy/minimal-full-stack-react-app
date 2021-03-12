import React from 'react'

import Routes from '../routes/Routes'
import Layout from '../components/layout/Layout'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import './App.css'

export default function () {
  return (
    <>
      <Routes>
        <Layout>
          <Navbar />
        </Layout>
      </Routes>
      <Footer />
    </>
  )
}