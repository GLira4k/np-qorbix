//import { useState } from 'react'
import { Layout } from 'antd'
import { BrowserRouter } from 'react-router-dom'
import DynamicHeader from '../components/DynamicComponents/DynamicHeader'
import DynamicMainContent from '../components/DynamicComponents/DynamicMainContent'
import DynamicFooter from '../components/DynamicComponents/DynamicFooter'


function App() {
  return (
    <>
      <Layout>
        <DynamicHeader />
        <DynamicMainContent />
        <DynamicFooter />
      </Layout>
    </>
  )
}

export default App
