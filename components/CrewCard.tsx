import React, { useState } from 'react'
import Draggable from 'react-draggable'
import styled from 'styled-components'
import Crew from '../models/crew'
import Popup from 'reactjs-popup'

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
    e.nativeEvent.preventDefault()
    setImpostorRate(parseInt(e.target.value, 10))
  }
    return (
        <Draggable>
            <Container style={{backgroundColor: `hsl(0,0%,${100 - 0.001*(impostorRate**2.5)}%)`}}>
                <Header>
                    <Square style={{backgroundColor: formCrew.color}} />
                </Header>
                <Popup trigger={<TriggerButton>⌄</TriggerButton>} position="bottom center">
                    <PopupModal style={{backgroundColor: `hsl(0,0%,${100 - 0.001*(impostorRate**2.5)}%)`}}>
                        <HeaderText>{formCrew.name}</HeaderText>
                        <StatusSelect value={formCrew.status} onChange={HandleChange}>
                            <option value="live" label="LIVE"/>
                            <option value="ejected" label="EJECTED"/>
                            <option value="killed" label="KILLED"/>
                        </StatusSelect>
                        <RangeContainer>
                        <RangeSlider type="range" list="range-list" onChange={HandleImpostorRateChange}/>
                            <datalist id="range-list">
                                <option value="0" />
                                <option value="25" />
                                <option value="50" />
                                <option value="75" />
                                <option value="100" />
                            </datalist>
                        </RangeContainer>
                    </PopupModal>
                </Popup>
            </Container>
        </Draggable>
    )
}

const Container = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    list-style: none;
    border: 1px solid #cee2f0;
    border-radius: 5px 5px;
    margin: 10px;
    padding: 5px;
`

const Header = styled.div`
    display: grid;
    grid-template-columns: 40px auto auto auto;
`

const PopupModal = styled.div`
    border: 1px solid #cee2f0;
    border-radius: 5px 5px;
`

const TriggerButton = styled.button`
    padding: 3px 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1.2em;
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
    width: 140px;
`

const StatusSelect = styled.select`
    cursor: pointer;
    height: 32px;
    borderRadius: 5px;
    margin: 5px;
`

const RangeContainer = styled.div`
    padding: 5px;
`

const RangeSlider = styled.input`
    width: 100%;
`

export default CrewCard
