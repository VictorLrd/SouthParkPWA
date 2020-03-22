import { DISPATCH_LOGIN } from '../actions/user'
import { DISPATCH_REGISTER } from '../actions/user'
import { DISPATCH_LOGOUT } from '../actions/user'

const initialState = {
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case DISPATCH_LOGIN:
      return {
        ...state,
        user: action.payload
      }
    case DISPATCH_REGISTER:
      return {
        ...state,
        user: action.payload
      }
    case DISPATCH_LOGOUT:
      return {
        ...state,
        user: {}
      }
    default:
      return state
  }
}
