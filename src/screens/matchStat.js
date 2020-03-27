import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styled from 'styled-components'

import allTheActions from '../actions'
import Match from '../components/match-stat'

const MatchStat = props => {
  useEffect(() => {
    props.actions.match.matchStatCall(props.match.params.matchId)
  }, [])
  return props.matchState.matchStat ? (
    <Container>
      <Match match={props.matchState.matchStat} />
    </Container>
  ) : (
    ''
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.primary};
  display: flex;
  justify-content: center;
`

const mapStateToProps = state => ({
  matchState: state.match
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    match: bindActionCreators(allTheActions.match, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(MatchStat)
