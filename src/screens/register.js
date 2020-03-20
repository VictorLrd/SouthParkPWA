import React, { Component } from 'react'
import styled from 'styled-components'
import Login from '../components/login'
import Register from '../components/register'

class componentName extends Component {
  render() {
    return (
      <Container>
        <Register></Register>
        <Login></Login>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: grey;
`

export default componentName
