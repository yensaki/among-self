import Layout from '../components/Layout'
import Crew from '../components/Crew'

const IndexPage = () => (
  <Layout title="Among Self">
    <h1>Among Self</h1>
    <ul>
      <Crew color="red" name="aaa"></Crew>
      <Crew color="blue" name="bbb"></Crew>
    </ul>
  </Layout>
)

export default IndexPage
