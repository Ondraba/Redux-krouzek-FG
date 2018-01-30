import React from 'react'
import Person from './Person'

const PersonList = ({ persons, onTodoClick }) => (
  <ul>
    {persons.map(person =>
      <Person
        key={person.id}
        person = {person}
        onClick={() => onTodoClick(person.id)}
      />
    )}
  </ul>
)

export default PersonList
