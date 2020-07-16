import Head from 'next/head'
import { Layout, Menu, } from 'antd'

const { Header } = Layout
const Index = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header>
          <Menu mode="horizontal" theme="dark">
            <Menu.Item key="product">
              <h3>Product</h3>
            </Menu.Item>
            <Menu.Item key="About">
              <h3>About</h3>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>

    </div>
  )
}

export default Index
