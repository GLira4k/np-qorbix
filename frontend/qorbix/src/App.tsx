//import { useState } from 'react'
import DynamicHeader from './components/DynamicComponents/DynamicHeader'
import DynamicMainContent from './components/DynamicComponents/DynamicMainContent'
import DynamicFooter from './components/DynamicComponents/DynamicFooter'
import { Content } from 'antd/es/layout/layout'
import { Layout } from 'antd'

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
