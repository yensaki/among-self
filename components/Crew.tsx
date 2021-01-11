import * as React from 'react'
import styled from 'styled-components'

type Props = {
  color: string,
  name: string,
}

const Crew = ({color, name}: Props) => (
    <Container >
        <div>
            <div>{name}</div>
            <Square style={{"background-color": color}}></Square>
        </div>

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

const Square = styled.div`
    width: 30px;
    height: 30px;
`

const RangeSlider = styled.input`
    width: 100%;
`

export default Crew
