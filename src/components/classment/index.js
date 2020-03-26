import React, { useState } from 'react'
import styled from 'styled-components'
import MatchFinishedCard from '../match-finished-card'
import UserPoint from '../userPoint'

const Classment = ({ users }) => {
  return (
    <SectionMain>
      <Container>
        <ContainerInfo>
          <Title>Classement du groupe:</Title>
          {users.map((user, index) => (
            <UserPoint user={user} place={index + 1} />
          ))}
        </ContainerInfo>
      </Container>
    </SectionMain>
  )
}
const Title = styled.h1`
  color: white;
  font-weight: bold;
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  background-color: 288aef;
  margin-top: 3%;
  margin-bottom: 5%;
  border: 5px solid black;
  padding: 20px;
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #134886;
`
const SectionMain = styled.body`
  /* background-color:#134886; */
`

export default Classment
