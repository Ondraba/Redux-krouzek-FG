import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../actions'

let SetFilter = ({ dispatch }) => {
  let filter

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!filter.value.trim()) {
          return
        }
        dispatch(setFilter(filter.value))
      }}>
        <input ref={node => {
          filter = node
        }} />
        <button type="submit">
         Add Sex
        </button>
      </form>
    </div>
  )
}


SetFilter = connect()(SetFilter)

export default SetFilter

