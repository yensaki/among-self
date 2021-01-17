import React, { useState } from 'react'
import styled from 'styled-components'
import Crew from '../models/crew'

type Props = {
  crew: Crew,
  onChange: (crew: Crew) => void
}

const CrewCard = ({crew, onChange}: Props) => {
  const [formCrew, setFormCrew] = useState(crew)
  const HandleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
      formCrew.status = e.target.value
      const newCrew: Crew = formCrew
      setFormCrew(newCrew)
      onChange(newCrew)
  }
  const [impostorRate, setImpostorRate] = useState(50)
  const HandleImpostorRateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpostorRate(parseInt(e.target.value, 10))
  }

    return (
        <Container style={{backgroundColor: `hsl(0,0%,${100 - (70 * impostorRate / 100)}%)`}}>
            <Header>
                <Square style={{backgroundColor: formCrew.color}} />
                <HeaderText>{formCrew.name}</HeaderText>
                <div>
                    <select value={formCrew.status} onChange={HandleChange}>
                        <option value="live">live</option>
                        <option value="ejected">ejected</option>
                        <option value="killed">killed</option>
                    </select>
                </div>
            </Header>

            <div>
                <RangeSlider type="range" list="range-list" onChange={HandleImpostorRateChange}/>
                <datalist id="range-list">
                    <option value="0" />
                    <option value="25" />
                    <option value="50" />
                    <option value="75" />
                    <option value="100" />
                </datalist>
            </div>
        </Container>
    )
}

const Container = styled.li`
    list-style: none;
    width: 320px;
    border: 1px solid #cee2f0;
    border-radius: 5px 5px;
    margin: 10px;
    padding: 5px;
`

const Header = styled.div`
    display: grid;
    grid-template-columns: 40px 200px 60px;
`

const Square = styled.div`
    border: 2px solid #cee2f0;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    margin: 5px;    
`

const HeaderText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

const RangeSlider = styled.input`
    width: 100%;
`

export default CrewCard
