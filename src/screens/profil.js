import React, { useState } from 'react'
import styled from 'styled-components'
import Prono from '../components/match-prono'
import Match from '../components/match-finished'

const Profil = () => {
  return (
    <Container>
      <Header>
        <Userprofil>
          <ContainerInfo>
            <Avatar
              src={'https://www.afrik.com/wp-content/uploads/2019/11/Akon.jpg'}
            ></Avatar>
          </ContainerInfo>
          <ContainerInfo>
            <Username>Akon_victed</Username>
            <Email>akon@gmail.com</Email>
            <MyTeam>Tottenham</MyTeam>
          </ContainerInfo>
        </Userprofil>
        <UserPoints>
          <Points>10 points</Points>
        </UserPoints>
      </Header>
      <TabsButtons>
        <DivTabButton>
          <TabButton>Pronostic</TabButton>
        </DivTabButton>
        <DivTabButton>
          <TabButton>Résultats</TabButton>
        </DivTabButton>
      </TabsButtons>
      <Tabs>
        <TabContainer>
          <Prono></Prono>
        </TabContainer>
        <TabContainer>
          <Match></Match>
        </TabContainer>
        <TabContainer></TabContainer>
      </Tabs>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #134886;
`
const TabsButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  height: 3em;
`
const DivTabButton = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  background-color: #e1e1e1;
  justify-content: center;
`
const TabButton = styled.a`
  display: block;
  font-size: 2em;
  font-weight: bold;
`
const TabContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`
const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  background-color: #00d46499;
  padding: 1em;
`

const Userprofil = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`

const ContainerInfo = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    font-weight: bold;
    font-family: sans-serif;
    color: #ffffff;
    padding:0 1rem;
}
`
const UserPoints = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: sans-serif;
    text-align: center;
}
`
const Avatar = styled.img`
    max-width: 10em;
    max-height: 10em;
    border-radius: 5em;
    border:5px solid gray;
}
`
const Username = styled.span`
    font-size: 2em;
}
`
const Email = styled.span`
    font-size: 1em;
}
`
const MyTeam = styled.span`
    font-size: 1em;
}
`
const Points = styled.span`
  font-size: 3em;
  text-al
`

export default Profil
