//import { useState } from 'react'
import DynamicHeader from './components/DynamicComponents/DynamicHeader'
import DynamicFooter from './components/DynamicComponents/DynamicFooter'
import { Content } from 'antd/es/layout/layout'
import { Layout } from 'antd'

function App() {
  return (
    <>
      <Layout>
        <DynamicHeader />
        <Layout>
          <Content>

          </Content>
        </Layout>
        <DynamicFooter />
      </Layout>
    </>
  )
}

export default App
