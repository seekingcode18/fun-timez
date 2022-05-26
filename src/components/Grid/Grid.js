import React, { useState } from 'react'
import Box from '../Box/Box'

const Grid = ({ total }) => {
  const [numbers, setNumbers] = useState([...Array(total).keys()])
  const [selected, setSelected] = useState()
  const [multiples, setMultiples] = useState([])

  return (
    <main className="container" role="grid" aria-multiselectable="true">
      <div className="grid" role="row">
        {
          numbers.map(n => (
            <Box key={n + 1}
                 number={n + 1}
                 isSelected={selected === n + 1}
                 isHighlighted={multiples.includes(n + 1)}
                 handleClick={() => {
                   setMultiples([...numbers.filter(num => !(num % (n + 1)))])
                   setSelected(n + 1)
                 }}
            />
          ))
        }
      </div>
    </main>
  )
}

export default Grid