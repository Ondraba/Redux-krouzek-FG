import { combineReducers } from 'redux'
import persons from './persons'
import filter from './filter'

const personsApp = combineReducers({
  persons,
  filter
})

export default personsApp
