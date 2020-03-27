import axios from 'axios'

export const DISPATCH_MATCH = 'DISPATCH_MATCH'
export const DISPATCH_MATCH_STAT = 'DISPATCH_MATCH_STAT'

export const dispatchMatch = payload => ({
  type: DISPATCH_MATCH,
  payload
})

export const dispatchMatchStat = payload => ({
  type: DISPATCH_MATCH_STAT,
  payload
})

export const matchCall = () => dispatch => {
  if (localStorage.getItem('user')) {
    axios
      .get(
        `http://51.254.118.15:3456/match/${JSON.parse(
          localStorage.getItem('user')
        )}`
      )
      .then(res => {
        dispatch(dispatchMatch(res.data.matchs))
        localStorage.setItem('matchs', JSON.stringify(res.data.matchs))
      })
      .catch(err => {
        if (localStorage.getItem('matchs')) {
          dispatch(dispatchMatch(JSON.parse(localStorage.getItem('matchs'))))
        }
        console.log(err)
      })
  }
}

export const saveMatchsCall = matchs => dispatch => {
  if (localStorage.getItem('user')) {
    axios
      .post(
        `http://51.254.118.15:3456/match/${JSON.parse(
          localStorage.getItem('user')
        )}`,
        {
          matchs
        }
      )
      .then(res => {
        console.log('hjkf', res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }
}

export const matchStatCall = matchId => dispatch => {
  if (localStorage.getItem('user') && matchId) {
    axios
      .get(
        `http://51.254.118.15:3456/matchStat/${matchId}/${JSON.parse(
          localStorage.getItem('user')
        )}`
      )
      .then(res => {
        dispatch(dispatchMatchStat(res.data))
      })
      .catch(err => {
        console.log(err)
      })
  }
}
