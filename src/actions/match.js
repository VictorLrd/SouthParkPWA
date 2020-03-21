import axios from 'axios'

export const DISPATCH_MATCH = 'DISPATCH_MATCH'

export const dispatchMatch = payload => ({
  type: DISPATCH_MATCH,
  payload
})

export const matchCall = () => dispatch => {
  axios
    .get('http://51.254.118.15:3456/match')
    .then(res => {
      dispatch(dispatchMatch(res.data))
    })
    .catch(err => {
      console.log(err)
    })
}
