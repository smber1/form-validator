
import { Actions } from '../constants'

const INITIAL_STATE = {
  name: ''
}

const form = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case Actions.UPDATE_NAME:
      return {...state, name: action.name}
    default:
      return state
  }
}

export default form
