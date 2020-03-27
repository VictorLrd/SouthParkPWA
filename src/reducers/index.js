import { combineReducers } from 'redux'

import theme from './theme'
import match from './match'
import user from './user'

export default combineReducers({
  theme,
  match,
  user
})
