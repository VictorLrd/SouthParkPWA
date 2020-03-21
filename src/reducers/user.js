import { DISPATCH_LOGIN } from '../actions/user'

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
    default:
      return state
  }
}
