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
      formCrew.name = e.target.value
      const newCrew: Crew = formCrew
      setFormCrew(newCrew)
      onChange(newCrew)
  }
  const HandleClickInUse = () => {
    formCrew.inuse = !formCrew.inuse
    const newCrew: Crew = formCrew
    setFormCrew(newCrew)
    onChange(newCrew)
  }
  return (
      <FormList style={{backgroundColor: formCrew.inuse ? "white" : "gray"}}>
          <Square onClick={HandleClickInUse} style={{backgroundColor: formCrew.color}} />
          <NameField type="text" name="name" value={formCrew.name} onChange={(e) => HandleChangeText(e)} />
      </FormList>
  )
}


const FormList = styled.li`
    display: flex;
    list-style: none;
    width: 280px;
    height: 60px;
    border: 1px solid #cee2f0;
    border-radius: 5px 5px;
    margin: 10px;
    padding: 15px 5px;
`

const Square = styled.div`
    border: 2px solid #cee2f0;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: 5px;  
    cursor: pointer;
`

const NameField = styled.input`
    width: 200px;
    height: 30px;
`

export default CrewForm