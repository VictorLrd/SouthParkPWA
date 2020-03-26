import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../actions'
import Classment from '../components/classment'

function GroupScores(props) {
  useEffect(() => {
    props.actions.user.groupScoreCall()
    console.log('classement', props.userState.classment)
  }, [])
  return <Classment users={props.userState.classment} />
}

const mapStateToProps = state => ({
  userState: state.user
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(GroupScores)
