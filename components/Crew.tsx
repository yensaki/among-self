import * as React from 'react'

type Props = {
  color: string
}

const Crew = ({color}: Props) => (
    <li>
        <div>
          {color}
        </div>
    </li>
)

export default Crew
