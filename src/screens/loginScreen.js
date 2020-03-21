import React from 'react'
import styled from 'styled-components'
import Login from '../components/login'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../actions'

const LoginScreen = props => {
  const login = (e, form) => {
    console.log(form.username)
    e.preventDefault()
    props.actions.user.loginCall(form.username, form.password)
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
