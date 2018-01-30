import React from 'react'

const Person = ({ onClick, person }) => (
  <li
    onClick={onClick}
    style={{
      color: person.sex === 'women' ? 'red' : 'green'
    }}
  >
    {person.name} | {person.sex}
  </li>
)

export default Person
