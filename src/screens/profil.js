import React, { useState } from 'react'
import styled from 'styled-components'
import Prono from '../components/match-prono'
import Match from '../components/match-finished'

const Profil = () => {
  return (
    <Container>
      <Header>
        <Userprofil>
          <Avatar
            src={'https://www.afrik.com/wp-content/uploads/2019/11/Akon.jpg'}
          ></Avatar>
          <Username>
            <Name>Akon_victed</Name>
          </Username>
        </Userprofil>
      </Header>
      <TabsButtons>
        <DivTabButton>
          <TabButton>Pronostic</TabButton>
        </DivTabButton>
        <DivTabButton>
          <TabButton>Résultats</TabButton>
        </DivTabButton>
        <DivTabButton>
          <TabButton>Tab 3</TabButton>
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
  padding: 0 2%;
  flex-direction: column;
`
const Tabs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #134886;
`
const TabsButtons = styled.div`
  margin-top: 5em;
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
  justify-content: center;
`
const Header = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10em;
  background-color: #00d46499;
`
const Userprofil = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 7em;
  left: 13%;
`
const Avatar = styled.img`
    width: 10em;
    height: 10em;
    border-radius: 5em;
    border:5px solid gray;
}
`
const Username = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2em;
    font-weight: bold;
    font-family: sans-serif;
    color: #ffffff;
}
`
const Name = styled.span`
    font-size: 2em;
}
`

export default Profil
