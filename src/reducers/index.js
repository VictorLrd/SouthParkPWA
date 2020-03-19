import { combineReducers } from 'redux'

import counter from './counter'
import theme from './theme'
import todos from './todos'

export default combineReducers({
  counter,
  theme,
  todos
})
