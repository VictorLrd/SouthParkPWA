import React, { Component } from 'react'
import styled from 'styled-components'

class Login extends Component {
  render() {
    return (
      <LoginDiv>
        <h3>Connexion</h3>
        <LoginInputDiv>
          <LoginInput placeholder='email'></LoginInput>
        </LoginInputDiv>
        <LoginInputDiv>
          <LoginInput placeholder='password'></LoginInput>
        </LoginInputDiv>
        <LoginInputDiv>
          <LoginButton>Valider</LoginButton>
        </LoginInputDiv>
      </LoginDiv>
    )
  }
}

const LoginDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2% 5%;
  max-width: 20%;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px #008ad440;
  text-align: center;
  margin-top: 3em;
`

const LoginInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5em 0;
`
const LoginInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 1em;
  border-radius: 5px;
  border-style: none;
  border: 0.5px solid #c6c2c2;
  padding: 0px 1em;
`

const LoginButton = styled.button`
  display: block;
  width: 50%;
  height: 40px;
  font-size: 1em;
  border-radius: 5px;
  border-style: none;
  border: 0.5px solid #c6c2c2;
  padding: 0px 1em;
  background-color: #008ad499;
  color: #ffffff;
`
export default Login
