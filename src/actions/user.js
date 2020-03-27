import axios from 'axios'

export const DISPATCH_LOGIN = 'DISPATCH_LOGIN'
export const DISPATCH_LOGOUT = 'DISPATCH_LOGOUT'
export const DISPATCH_REGISTER = 'DISPATCH_REGISTER'
export const DISPATCH_GROUP = 'DISPATCH_GROUP'
export const DISPATCH_USER_INFO = 'DISPATCH_USER_INFO'

export const dispatchLogin = payload => ({
  type: DISPATCH_LOGIN,
  payload
})

export const dispatchRegister = payload => ({
  type: DISPATCH_REGISTER,
  payload
})

export const dispatchGroup = payload => ({
  type: DISPATCH_GROUP,
  payload
})

export const dispatchUserInfo = payload => ({
  type: DISPATCH_USER_INFO,
  payload
})

export const loginCall = (username, password, history) => dispatch => {
  axios
    .post('http://51.254.118.15:3456/login', { username, password })
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

export const groupScoreCall = () => dispatch => {
  if (localStorage.getItem('user')) {
    axios
      .get(
        `http://localhost:3456/groupScore/${JSON.parse(
          localStorage.getItem('user')
        )}`
      )
      .then(
        res => {
          dispatch(dispatchGroup(res.data.classment))
          localStorage.setItem('classment', JSON.stringify(res.data.classment))
        },
        err => {
          console.log('err', err.data)
        }
      )
      .catch(err => {
        if (localStorage.getItem('classment')) {
          dispatch(dispatchGroup(JSON.parse(localStorage.getItem('classment'))))
        }
        console.log('hjkjskfd', err.message)
      })
  }
}

export const userInfoCall = () => dispatch => {
  if (localStorage.getItem('user')) {
    axios
      .get(
        `http://localhost:3456/userInfo/${JSON.parse(
          localStorage.getItem('user')
        )}`
      )
      .then(
        res => {
          console.log(res.data)
          dispatch(dispatchUserInfo(res.data))
          // localStorage.setItem('userInfo', JSON.stringify(res.data.classment))
        },
        err => {
          console.log('err', err.data)
        }
      )
      .catch(err => {
        // if (localStorage.getItem('classment')) {
        //   // dispatch(dispatchGroup(JSON.parse(localStorage.getItem('classment'))))
        // }
        console.log('hjkjskfd', err.message)
      })
  }
}

export const logoutCall = () => dispatch => {
  localStorage.removeItem('user')
  localStorage.removeItem('matchs')
  localStorage.removeItem('classment')
}
