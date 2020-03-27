import React from 'react'
import styled from 'styled-components'
import logoDom from '../../assets/dom.png'
import logoExt from '../../assets/ext.png'

const MatchProno = () => {
  return (
    <Container>
      <ContainerJournee>
        <ContainerJourneeTitre>32ème journée</ContainerJourneeTitre>
      </ContainerJournee>
      <ContainerMatch>
        <DateMatch>01/08 à 20:00</DateMatch>
        <ContainerMatchInfo>
          <ContainerTeam dom='true'>
            <ContainerInfoTeam>RB Leipzig</ContainerInfoTeam>
            <LogoEquipe src={logoDom}></LogoEquipe>
          </ContainerTeam>
          <ContainerScore>
            <Scores dom='true' placeholder='?' />
            <Scores dom='false' placeholder='?' />
          </ContainerScore>
          <ContainerTeam dom='false'>
            <ContainerInfoTeam>Tottenham</ContainerInfoTeam>
            <LogoEquipe src={logoExt}></LogoEquipe>
          </ContainerTeam>
        </ContainerMatchInfo>
      </ContainerMatch>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #134886;
  width: 100%;
`

const ContainerJournee = styled.div`
  border: 2px solid #288aef;
  display: flex;
  max-width: 70%;
  background-color: #288aef;
  border-radius: 10px;
  padding: 1% 1%;
  margin-top: 1%;
`
const ContainerJourneeTitre = styled.p`
  display: flex;
  margin: auto;
  color: white;
  font-weight: bold;
  font-size: 2em;
`
const ContainerMatchInfo = styled.div`
  display: flex;
  flex-direction: row;
`

const DateMatch = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 1em;
  font-weight: bold;
  color: white;
  font-size: 1em;
`
const Scores = styled.input`
  color: ${props => (props.dom == 'true' ? '#eb8400' : 'white')};
  background-color: ${props => (props.dom == 'true' ? 'gold' : '#0275ea')};
  font-weight: bold;
  align-items: center;
  display: flex;
  height: 20%;
  width: 20%;
  border: none;
  border-radius: 7px;
  text-align: center;
  margin: 1%;
`

const ContainerScore = styled.div`
  display: flex;
  flex-direction: row;
  border-radius: 5px;
  justify-content: center;
  width: 100%;
  align-items: center;
`

const LogoEquipe = styled.img`
  border-radius: 15px;
  width: 70%;
  height: 70%;
`

const ContainerInfoTeam = styled.p`
  display: flex;
  color: white;
  font-size: 1rem;
  font-weight: bold;
`

const ContainerMatch = styled.div``

const ContainerTeam = styled.div`
  display: flex;
  flex-direction: ${props => (props.dom == 'true' ? 'row' : 'row-reverse')};
  justify-content: space-around;
  width: 100%;
  align-items: center;
`
export default MatchProno
