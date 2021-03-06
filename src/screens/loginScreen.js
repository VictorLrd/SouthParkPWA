import React from 'react'
import styled from 'styled-components'
import Login from '../components/login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { useHistory } from 'react-router-dom'

import allTheActions from '../actions'

const LoginScreen = props => {
  const history = useHistory()
  const login = (e, form) => {
    e.preventDefault()
    props.actions.user.loginCall(form.username, form.password, history)
  }
  return (
    <Container>
      <Login submit={login}></Login>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: grey;
`
const mapDispatchToProps = () => dispatch => ({
  actions: {
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(LoginScreen)
