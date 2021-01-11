import Layout from '../components/Layout'
import CrewCard from '../components/CrewCard'
import { useState } from 'react'

const IndexPage = () => {
  // const colors = [
  //   "red",
  //   "blue",
  //   "green",
  //   "pink",
  //   "orange",
  //   "yellow",
  //   "black",
  //   "white",
  //   "purple",
  //   "brown",
  //   "cyan",
  //   "lime"
  // ]
  // const defaultCrews = colors.map()
  // const [crews, setCrews] = useState(defaultCrews)
  return (
    <Layout title="Among Self">
    <h1>Among Self</h1>
    <ul>
      <CrewCard color="red" name="aaa" />
      <CrewCard color="blue" name="bbb" />
    </ul>
  </Layout>
  )
}

export default IndexPage
