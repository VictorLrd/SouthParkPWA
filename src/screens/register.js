import React, { Component } from 'react'
import styled from 'styled-components'
import Login from '../components/login'
import Register from '../components/register'
import GroupForm from '../components/group-form'

const componentName = () => {
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

export default componentName
