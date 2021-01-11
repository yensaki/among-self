import * as React from 'react'

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
        <div>
            <p>{name}</p>
            {color}
            <p>
                {mark}
            </p>
            <div>
                <input type="range" />
            </div>
        </div>
    </li>
)

export default Crew
