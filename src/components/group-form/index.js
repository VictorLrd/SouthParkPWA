import React, { Component } from 'react'
import styled from 'styled-components'

const GroupForm = () => {
  return (
    <FormDiv>
      <h3>Création de groupe</h3>
      <FormInputDiv>
        <FormInput placeholder='groupname'></FormInput>
      </FormInputDiv>
      <FormInputDiv>
        <FormInput placeholder='minbet'></FormInput>
      </FormInputDiv>
      <FormInputDiv>
        <FormButton>Créer</FormButton>
      </FormInputDiv>
    </FormDiv>
  )
}
const FormDiv = styled.div`
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

const FormInputDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 0.5em 0;
`
const FormInput = styled.input`
  display: block;
  width: 100%;
  height: 40px;
  font-size: 1em;
  border-radius: 5px;
  border-style: none;
  border: 0.5px solid #c6c2c2;
  padding: 0px 1em;
`

const FormButton = styled.button`
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

export default GroupForm
