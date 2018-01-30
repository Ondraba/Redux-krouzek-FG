import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddPerson'
import SetFilter from '../containers/SetFilter'
import PersonListDriver from '../containers/PersonListDriver'

const App = () => (
  <div>
    <AddTodo />
    <PersonListDriver />
    <SetFilter />
    <Footer />
  </div>
)

export default App
