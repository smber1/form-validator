
import { Actions } from '../constants'

export const updateName = (name) => ({
  type: Actions.UPDATE_NAME,
  name
})

export const submit = () => ({
  type: Actions.SUBMIT
})
