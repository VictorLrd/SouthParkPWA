import axios from 'axios'

export const DISPATCH_LOGIN = 'DISPATCH_LOGIN'

export const dispatchMatch = payload => ({
  type: DISPATCH_LOGIN,
  payload
})

export const loginCall = (username, password) => dispatch => {
  axios
    .post('http://51.254.118.15:3456/login', { username, password })
    .then(res => {
      console.log(res)
      // dispatch(dispatchMatch(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}
