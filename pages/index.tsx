import Layout from '../components/Layout'
import CrewCard from '../components/CrewCard'
import { useState } from 'react'
import ConfigModal from '../components/ConfigModal'
import Crew from '../models/crew'

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
      const crew: Crew = {color: color, name: "", inuse: true}
      defaultCrews.push(crew)
  })
  const [crews, setCrews] = useState(defaultCrews)

  const updateCrews = (crews: Crew[]) => {
      setCrews(crews)
  }

  return (
    <Layout title="Among Self">
      <h1>Among Self</h1>
      <ul>
        {crews.map((crew) => (
          crew.inuse && <CrewCard color={crew.color} name={crew.name} key={crew.color} />
        ))}
      </ul>
      <ConfigModal crews={defaultCrews} updateCrews={updateCrews} />
    </Layout>
  )
}

export default IndexPage
