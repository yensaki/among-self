import Layout from '../components/Layout'
import CrewCard from '../components/CrewCard'
import { useState } from 'react'

interface Crew {
  color: string,
  name: string
}

const IndexPage = () => {
  const colors = [
    "red",
    "blue",
    "green",
    "pink",
    "orange",
    "yellow",
    "black",
    "white",
    "purple",
    "brown",
    "cyan",
    "lime"
  ]

  const defaultCrews: Crew[] = []
  colors.forEach((color) => {
      const crew: Crew = {color: color, name: ""}
      defaultCrews.push(crew)
  })
  const [crews, setCrews] = useState(defaultCrews)
  return (
    <Layout title="Among Self">
    <h1>Among Self</h1>
    <ul>
      {crews.map((crew) => (
        crew.color && <CrewCard color={crew.color} name={crew.name} />
      ))}
    </ul>
  </Layout>
  )
}

export default IndexPage
