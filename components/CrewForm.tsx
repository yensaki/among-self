import { useState } from 'react'
import styled from 'styled-components'
import Crew from '../models/crew'

type CrewProps = {
  crew: Crew,
  onChange: (crew: Crew) => void
}

const CrewForm = ({crew, onChange}: CrewProps) => {
  const [formCrew, setFormCrew] = useState(crew)
  const HandleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newCrew: Crew = {index: formCrew.index, color: formCrew.color, name: e.target.value, inuse: formCrew.inuse}
      setFormCrew(newCrew)
      onChange(newCrew)
  }
  return (
      <FormList>
          <Square style={{backgroundColor: formCrew.color}} />
          <input type="text" name="name" value={formCrew.name} onChange={(e) => HandleChangeText(e)} />
      </FormList>
  )
}


const FormList = styled.li`
    display: flex;
    list-style: none;
    width: 320px;
    border: 1px solid #cee2f0;
    border-radius: 5px 5px;
    margin: 10px;
    padding: 5px;
`

const Square = styled.div`
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: 5px;    
`


export default CrewForm