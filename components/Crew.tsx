import * as React from 'react'

type Props = {
  color: string,
  name: string
}

const Crew = ({color, name}: Props) => (
    <li>
        <div>
            <p>{name}</p>
            {color}
        </div>
    </li>
)

export default Crew
