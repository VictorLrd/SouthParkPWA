import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import styled from 'styled-components'

import allTheActions from '../actions'
import MatchList from '../components/match-list'

import { themeLight, themeDark } from '../config/theme'

const ListMatchs = props => {
  useEffect(() => {
    props.actions.match.matchCall()
  }, [])
  const save = matchs => {
    props.actions.match.saveMatchsCall(props.matchState.match)
  }
  return props.matchState.match ? (
    <Container>
      <ButtonTheme onClick={() => props.actions.theme.changeTheme(themeLight)}>
        Theme Light
      </ButtonTheme>
      <ButtonTheme onClick={() => props.actions.theme.changeTheme(themeDark)}>
        Theme Dark
      </ButtonTheme>
      <MatchList matchs={props.matchState.match} save={save} />
    </Container>
  ) : (
    ''
  )
}

const Container = styled.div`
  background-color: ${props => props.theme.primary};
`

const ButtonTheme = styled.div`
  color: white;
`

const mapStateToProps = state => ({
  matchState: state.match
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    match: bindActionCreators(allTheActions.match, dispatch),
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(ListMatchs)
