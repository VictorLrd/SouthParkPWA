import React from 'react'
import styled from 'styled-components'
import logoDom from '../../assets/dom.png'
import logoExt from '../../assets/ext.png'

const MatchFinished = () => {
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
            <DetailsScores>
              <Scores>
                <Details>2 - 2</Details>
                <MonScore>Mon score (3-0)</MonScore>
              </Scores>
              <Points>
                <ColorCode></ColorCode>
                <Details>1 point</Details>
              </Points>
            </DetailsScores>
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
  display: flex;
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

const ContainerScore = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  width: 100%;
  align-items: center;
  justify-content: center;
`

const DetailsScores = styled.div`
  border-radius: 5px;
  background-color: #288aef;
  border: 2px solid grey;
`

const Scores = styled.div`
  border: 2px solid grey;
  color: ${props => (props.dom == 'true' ? '#eb8400' : 'white')};
  background-color: ${props => (props.dom == 'true' ? 'gold' : '#0275ea')};
  font-weight: bold;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-content: space-around;
  padding: 5px;
`
const Points = styled.div`
  border: 1px solid grey;
  color: ${props => (props.dom == 'true' ? '#eb8400' : 'white')};
  background-color: ${props => (props.dom == 'true' ? 'gold' : '#0275ea')};
  font-weight: bold;
  align-items: center;
  display: flex;
  text-align: center;
  justify-content: space-around;
  padding: 5px;
`
const ColorCode = styled.div`
  height: 1em;
  width: 50%;
  background-color: ${props => props.color || 'red'};
  border-radius: 5px;
`
const Details = styled.span`
  text-align: center;
  font-size: 1em;
  font-weight: bold;
`
const MonScore = styled.span`
  text-align: center;
  font-size: 10px;
  font-weight: bold;
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

export default MatchFinished
