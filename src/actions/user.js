import axios from 'axios'

export const DISPATCH_LOGIN = 'DISPATCH_LOGIN'

export const dispatchLogin = payload => ({
  type: DISPATCH_LOGIN,
  payload
})

export const loginCall = (username, password) => dispatch => {
  console.log(username, password)
  axios
    .post('http://51.254.118.15:3456/login', { username, password })
    .then(res => {
      console.log(res)
      // dispatch(dispatchLogin(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}

// export const registerCall = ({ username, password, group, }) => dispatch => {
//   console.log(username, password)
//   axios
//     .post('http://51.254.118.15:3456/login', { username, password })
//     .then(res => {
//       console.log(res)
//       // dispatch(dispatchLogin(res.data))
//     })
//     .catch(err => {
//       console.log(err)
//     })
// }
