
import { Actions } from '../../constants'
import name from './fields/name'

const INITIAL_STATE = {
  name: {
    isError: false
  }
}

const errors = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case Actions.UPDATE_NAME:
      return {...state, name: name(action.name)}
    default:
      return state
  }
}

export default errors
