import axios from 'axios'

export const DISPATCH_LOGIN = 'DISPATCH_LOGIN'
export const DISPATCH_LOGOUT = 'DISPATCH_LOGOUT'
export const DISPATCH_REGISTER = 'DISPATCH_REGISTER'

export const dispatchLogin = payload => ({
  type: DISPATCH_LOGIN,
  payload
})

export const dispatchRegister = payload => ({
  type: DISPATCH_REGISTER,
  payload
})

export const loginCall = (username, password, history) => dispatch => {
  axios
    .post('http://localhost:3456/login', { username, password })
    .then(
      res => {
        localStorage.setItem('user', JSON.stringify(res.data.id))
        dispatch(dispatchLogin(res.data.id))
        history.push('/')
      },
      err => {
        console.log('err', err.data)
      }
    )
    .catch(err => {
      console.log('hjkjskfd', err.message)
    })
}

export const registerCall = ({
  username,
  password,
  group,
  favoriteTeam,
  email
}) => dispatch => {
  axios
    .post('http://localhost:3456/register', {
      username,
      password,
      group,
      favoriteTeam,
      email
    })
    .then(res => {
      localStorage.setItem('user', JSON.stringify(res.data.user))
      dispatch(dispatchRegister(res.data.user))
    })
    .catch(err => {
      console.log(err)
    })
}

export const logoutCall = () => dispatch => {
  localStorage.removeItem('user')
}
