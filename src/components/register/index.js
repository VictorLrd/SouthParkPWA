import React, { useState } from 'react'
import styled from 'styled-components'

const Register = ({ submit }) => {
  const [form, setForm] = useState({
    username: '',
    password: '',
    email: '',
    group: '',
    favoriteTeam: '',
    isError: false,
    isErrorMessage: ''
  })
  return (
    <RegisterDiv onSubmit={e => submit(e, form)}>
      <h3>Inscription</h3>
      <RegisterInputDiv>
        <RegisterInput
          name='username'
          placeholder='Votre username'
          onChange={e => setForm({ ...form, username: e.target.value })}
          type='text'
          onBlur={() =>
            form.username.length < 6
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: 'Votre nom doit faire plus de 6 caractères.'
                })
              : setForm({ ...form, isError: false })
          }
        ></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput
          name='email'
          placeholder='Votre email'
          onChange={e => setForm({ ...form, email: e.target.value })}
          type='email'
          onBlur={() =>
            form.email.length < 10
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: "Votre email n'est pas bon"
                })
              : setForm({ ...form, isError: false })
          }
        ></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput
          name='password'
          placeholder='Votre mot de passe'
          onChange={e => setForm({ ...form, password: e.target.value })}
          type='password'
          onBlur={() =>
            form.password.length < 6
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: "Votre email n'est pas bon"
                })
              : setForm({ ...form, isError: false })
          }
        ></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput
          name='group'
          placeholder='Votre code de groupe'
          onChange={e => setForm({ ...form, group: e.target.value })}
          type='text'
          onBlur={() =>
            form.group.length < 5
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: "Votre groupe n'est pas bon"
                })
              : setForm({ ...form, isError: false })
          }
        ></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterInput
          name='favoriteTeam'
          placeholder='Votre équipe favorite'
          onChange={e => setForm({ ...form, favoriteTeam: e.target.value })}
          type='text'
          onBlur={() =>
            form.favoriteTeam.length < 5
              ? setForm({
                  ...form,
                  isError: true,
                  isErrorMessage: "Votre équipe n'est pas bonne."
                })
              : setForm({ ...form, isError: false })
          }
        ></RegisterInput>
      </RegisterInputDiv>
      <RegisterInputDiv>
        <RegisterButton disabled={form.isError} type='submit'>
          Enregistrer
        </RegisterButton>
      </RegisterInputDiv>
    </RegisterDiv>
  )
}

const RegisterDiv = styled.form`
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
