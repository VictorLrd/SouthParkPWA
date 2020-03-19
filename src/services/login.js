import axios from 'axios'

const login = (username, password, history) => {
  axios
    .post('https://easy-login-api.herokuapp.com/users/login', {
      username: username,
      password: password
    })
    .then(function(response) {
      const json = response.headers['x-access-token']
      const obj = JSON.stringify(json)
      console.log(obj)
      localStorage.setItem('x-access-token', obj)
      history.push('/characters')
    })
    .catch(function(error) {
      console.log(error)
    })
}

export default login
