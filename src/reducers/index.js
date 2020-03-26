import { combineReducers } from 'redux'

import counter from './counter'
import theme from './theme'
import todos from './todos'
import match from './match'
import user from './user'

export default combineReducers({
  counter,
  theme,
  todos,
  match,
  user
})
