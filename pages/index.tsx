import Layout from '../components/Layout'
import Crew from '../components/Crew'

const IndexPage = () => (
  <Layout title="Among Self">
    <h1>Among Self</h1>
    <ul>
      <Crew color="red"></Crew>
      <Crew color="blue"></Crew>
    </ul>
  </Layout>
)

export default IndexPage
