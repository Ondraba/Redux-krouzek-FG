// import { connect } from 'react-redux'
// import PersonList from '../components/PersonList'

// const mapStateToProps = (state) => ({
//   persons: applyFilter(state.persons, state.filter)
// })

// const applyFilter = (persons, filter) => {
//   switch (filter) {
//     case 'ALL_SEX':
//       return persons
//     case 'women':
//       return persons.filter(p => p.sex === 'women')
//     case 'men':
//       return persons.filter(p => p.sex === 'men')
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// }

// const PersonListDriver = connect(
//   mapStateToProps,
//   {},
// )(PersonList)

// export default PersonListDriver
