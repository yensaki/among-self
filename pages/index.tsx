import Link from 'next/link'
import Layout from '../components/Layout'

const Crew = () => (
  <li>
    <div>
      aaa
    </div>
  </li>
)

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <ul>
      <Crew></Crew>
    </ul>
  </Layout>
)

export default IndexPage
