import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../actions'
import MatchList from '../components/match-list'

function MatchRedux(props) {
  console.log(props)
  useEffect(() => {
    props.actions.match.matchCall()
  }, [])
  return <MatchList matchs={props.matchState.match} />
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
