import React, { useState } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../../actions'

const Login = ({ submit }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    isError: false,
    isErrorMessage: ''
  })
  return (
    <FormLogin onSubmit={e => submit(e, form)}>
      <h1>Connexion</h1>
      <LoginInputDiv>
        <LoginInput
          placeholder="Votre nom d'utilisateur"
          name='username'
          onChange={e => setForm({ ...form, username: e.target.value })}
          type='text'
          onBlur={() =>
            form.username.length < 5
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Username invalide'
                })
              : setForm({ ...form, isError: false })
          }
        ></LoginInput>
      </LoginInputDiv>
      <LoginInputDiv>
        <LoginInput
          name='password'
          placeholder='Votre mot de passe'
          onChange={e => setForm({ ...form, password: e.target.value })}
          type='password'
          onBlur={() =>
            form.password.length < 8
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Mot de passe invalide'
                })
              : setForm({ ...form, isError: false })
          }
        ></LoginInput>
      </LoginInputDiv>
      <LoginInputDiv>
        <LoginButton disabled={form.isError} type='submit'>
          Valider
        </LoginButton>
      </LoginInputDiv>
    </FormLogin>
  )
}

const FormLogin = styled.form``

const LoginDiv = styled.div`
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
const mapDispatchToProps = () => dispatch => ({
  actions: {
    user: bindActionCreators(allTheActions.user, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(Login)
