const persons = (state = [], action) => {
  switch (action.type) {
    case 'ADD_PERSON':
      return [
        ...state,
        {
          id: action.id,
          name: action.name,
          sex: action.sex
        }
      ]
    default:
      return state
  }
}

export default persons
