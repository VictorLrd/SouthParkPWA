import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../actions'
import MatchList from '../components/match-list'

function MatchRedux(props) {
  useEffect(() => {
    props.actions.match.matchCall()
  }, [])
  const save = matchs => {
    props.actions.match.saveMatchsCall(props.matchState.match)
  }
  return props.matchState.match ? (
    <MatchList matchs={props.matchState.match} save={save} />
  ) : (
    ''
  )
}

const mapStateToProps = state => ({
  matchState: state.match
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    match: bindActionCreators(allTheActions.match, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchRedux)
