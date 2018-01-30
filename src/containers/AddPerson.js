import React from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../actions'

let AddPerson = ({ dispatch }) => {
  let input
  let sex

  return (
    <div>
      <div>FG kluci a holky!</div><br/>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim() && !sex.value.trim()) {
          return
        }
        dispatch(addPerson(input.value, sex.value))
        input.value = ''
        sex.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <input ref={node2 => {
          sex = node2
        }} />
        <button type="submit">
          Add Person
        </button>
      </form>
    </div>
  )
}
AddPerson = connect()(AddPerson)

export default AddPerson
