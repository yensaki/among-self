import * as React from 'react'
import styled from 'styled-components'

enum Mark {
    Crewmate = 'crewmate',
    Impostor = 'impostor',
    Gray = 'gray'
}

type Props = {
  color: string,
  name: string,
  mark: Mark
}

const Crew = ({color, name, mark}: Props) => (
    <li>
        <Container >
            <Square color={color}></Square>
            <p>{name}</p>
            {color}
            <p>
                {mark}
            </p>
            <div>
                <input type="range" list="range-list"/>
                <datalist id="range-list">
                    <option value="0" />
                    <option value="25" />
                    <option value="50" />
                    <option value="75" />
                    <option value="100" />
                </datalist>
            </div>
        </Container>
    </li>
)

type SquareProps = {
    color: string
}
const Container = styled.div`
`

const Square = styled.div<SquareProps>`
    width: 100px;
    height: 100px;
    background-color: red;
`

export default Crew
