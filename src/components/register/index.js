import React, { Component } from 'react'
import styled from 'styled-components'

const Register = () => {
  return (
    <RegisterDiv>
      <h3>Inscription</h3>
      <RegisterInputDiv>
        <RegisterInput placeholder='username'></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput placeholder='email'></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput placeholder='password'></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput placeholder='group'></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput placeholder='favoriteTeam'></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterButton>Enregistrer</RegisterButton>
      </RegisterInputDiv>
    </RegisterDiv>
  )
}

const RegisterDiv = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 2% 5%;
  border-radius: 5px;
  box-shadow: 2px 2px 5px 2px #008ad440;
  text-align: center;
  margin-top: 3em;
`

const RegisterInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5em 0;
`
const RegisterInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 1em;
  border-radius: 5px;
  border-style: none;
  border: 0.5px solid #c6c2c2;
  padding: 0px 1em;
`

const RegisterButton = styled.button`
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

export default Register
