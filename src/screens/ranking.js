import React from 'react'
import { connect } from 'react-redux'

const Ranking = props => {
  console.log('Ranking -> props', props)
  return (
    <div>
      <p>{props.counterState.counter}</p>
    </div>
  )
}

const mapStateToProps = state => ({
  counterState: state.counter
})
export default connect(mapStateToProps)(Ranking)
