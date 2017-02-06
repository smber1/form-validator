
import { combineReducers } from 'redux'
import form from './form/'
import errors from './errors/'

const reducer = combineReducers({
  form,
  errors
})

export default reducer
