import axios from 'axios'

export const DISPATCH_MATCH = 'DISPATCH_MATCH'

export const dispatchMatch = payload => ({
  type: DISPATCH_MATCH,
  payload
})

export const matchCall = () => dispatch => {
  console.log('hjkl')
  if (localStorage.getItem('user')) {
    console.log('hjkl')
    axios
      .get(
        `http://localhost:3456/match/${JSON.parse(
          localStorage.getItem('user')
        )}`
      )
      .then(res => {
        dispatch(dispatchMatch(res.data.matchs))
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const saveMatchsCall = matchs => dispatch => {
  if (localStorage.getItem('user')) {
    axios
      .post(
        `http://localhost:3456/match/${JSON.parse(
          localStorage.getItem('user')
        )}`,
        {
          matchs
        }
      )
      .then(res => {
        console.log('hjkf', res.data)
        // dispatch(dispatchMatch(res.data.matchs))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
