import React, { Component } from 'react'
import styled from 'styled-components'
import Login from '../components/login'
import Register from '../components/register'
import GroupForm from '../components/group-form'

const Register = () => {
  return (
    <Container>
      <Login></Login>
      <Register></Register>
      <GroupForm></GroupForm>
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

export default Register
