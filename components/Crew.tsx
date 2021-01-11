import * as React from 'react'
import styled from 'styled-components'

type Props = {
  color: string,
  name: string,
}

const Crew = ({color, name}: Props) => (
    <Container >
        <Header>
            <Square style={{backgroundColor: color}}></Square>
            <HeaderText>{name}</HeaderText>
        </Header>

        <div>
            <RangeSlider type="range" list="range-list"/>
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

const Container = styled.li`
    list-style: none;
    width: 320px;
    border: 1px solid #cee2f0;
    border-radius: 5px 5px;
    margin: 10px;
    padding: 5px;
`

const Header = styled.div`
    display: flex;
`

const Square = styled.div`
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

export default Crew
