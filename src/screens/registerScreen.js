import React from 'react'
import styled from 'styled-components'
import Register from '../components/register'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import allTheActions from '../actions'

const RegisterScreen = props => {
  const register = (e, form) => {
    console.log(form)
    e.preventDefault()
    props.actions.user.registerCall(form)
  }
  return (
    <Container>
      <Register submit={register}></Register>
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

export default connect(null, mapDispatchToProps)(RegisterScreen)
