import Layout from '../components/Layout'
import CrewCard from '../components/CrewCard'
import { useState } from 'react'
import CrewForm from '../components/CrewForm'
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
  colors.forEach((color, index) => {
      defaultCrews.push({color: color, name: color, inuse: true, index: index} as Crew)
  })
  const [crews, setCrews] = useState(defaultCrews)

  const updateCrews = (updatedCrews: Crew[]) => {
      setCrews(updatedCrews)
  }
  const onChangeHandle = (changedCrew: Crew) => {
    const newCrews: Crew[] = []
    crews.forEach((crew) => {
      if (crew.index == changedCrew.index) {
        newCrews.push(changedCrew)
      } else {
        newCrews.push(crew)
      }
    })
    setCrews(newCrews)
  }

  const debugFuncton = () => {
    const newCrews: Crew[] = []
    colors.forEach((color, index) => {
      newCrews.push({color: color, name: "ssssss", inuse: true, index: index} as Crew)
    })
    setCrews(newCrews)
  }

  return (
    <Layout title="Among Self">
      <h1>Among Self</h1>
      <ul>
        {crews.map((crew) => (
          crew.inuse ? <CrewCard color={crew.color} name={crew.name} key={crew.color} /> : ""
        ))}
      </ul>
      <div >
        <form>
            <ul>
                {crews.map((crew) => 
                  <CrewForm crew={crew} onChange={onChangeHandle} key={crew.index} />
                )}
            </ul>
            <input type="submit" value="決定" />
        </form>
      </div>
    </Layout>
  )
}

// type CrewProps = {
//   crew: Crew,
//   onChange: (crew: Crew) => void
// }

// const CrewForm = ({crew, onChange}: CrewProps) => {
//   const [formCrew, setFormCrew] = useState(crew)
//   const HandleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
//       const newCrew: Crew = {index: formCrew.index, color: formCrew.color, name: e.target.value, inuse: formCrew.inuse}
//       setFormCrew(newCrew)
//       onChange(newCrew)
//   }
//   return (
//       <li>
//           <p>{formCrew.color}</p>
//           <label>プレイヤー名</label>
//           <input type="text" name="name" value={formCrew.name} onChange={(e) => HandleChangeText(e)} />
//       </li>
//   )
// }

// const FormList = styled.li`
//     display: flex;
//     list-style: none;
//     width: 320px;
//     border: 1px solid #cee2f0;
//     border-radius: 5px 5px;
//     margin: 10px;
//     padding: 5px;
// `

export default IndexPage
