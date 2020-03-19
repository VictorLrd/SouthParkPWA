import React from 'react'
import styled from 'styled-components'
import axios from 'axios'

import LoginForm from '../components/loginForm'

import login from '../services/login'

const submit = (e, form, history) => {
  e.preventDefault()
  const { username, password } = form
  login(username, password, history)
}

const Login = props => {
  // console.log('TCL: props', props)
  return <Container>{/* <LoginForm submit={submit}></LoginForm> */}</Container>
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
`

const Square = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${props =>
    props.secondary ? props.theme.secondary : props.theme.primary};
`

const SquareShadow = styled(Square)`
  box-shadow: 1px 1px 10px black;
`

export default Login
