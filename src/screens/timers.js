import React from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../actions'

import { Link } from 'react-router-dom'

import Counter from '../components/counter'
import i18next from 'i18next'
import styled from 'styled-components'

import { themeLight, themeDark } from '../config/theme'

const Timers = props => {
  console.log('props', props)
  return (
    <Container>
      <Link to='/ranking'>Ranking</Link>
      <button onClick={() => props.actions.theme.changeTheme(themeLight)}>
        Theme Light
      </button>
      <button onClick={() => props.actions.theme.changeTheme(themeDark)}>
        Theme Dark
      </button>
      <Counter
        counter={props.counterState.counter}
        incrementCounter={() => props.actions.counter.incrementCounter(3)}
        decrementCounter={() => props.actions.counter.decrementCounter(4)}
        label='gryffondor'
      ></Counter>
      <Counter label='Serpentard'></Counter>
      <Counter label='truc3'></Counter>
      <Counter label='truc4'></Counter>
    </Container>
  )
}
const Container = styled.div`
  background-color: ${props => props.theme.primary};
`

const mapStateToProps = state => ({
  counterState: state.counter
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    counter: bindActionCreators(allTheActions.counter, dispatch),
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Timers)
