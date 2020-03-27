import React from 'react'
import styled from 'styled-components'

const MatchPronoCard = ({ match }) => {
  return (
    <ContainerMatch>
      <ContainerMatchInfo>
        <ContainerInfoTeamDom>{match.dom}</ContainerInfoTeamDom>
        <LogoDom src={match.logoDom}></LogoDom>{' '}
        <ContainerScore>
          <ScoreDomicile
            value={match.scoreDomUser}
            onChange={e => (match.scoreDomUser = e.target.value)}
            defaultValue='?'
          />{' '}
          <ScoreExterieur
            value={match.scoreExtUser}
            onChange={e =>
              (match.scoreExtUser = e.target.value) &&
              console.log(e.target.value)
            }
            defaultValue='?'
          />
        </ContainerScore>{' '}
        <LogoExt src={match.logoExt}></LogoExt>{' '}
        <ContainerInfoTeamExt>{match.ext}</ContainerInfoTeamExt>{' '}
      </ContainerMatchInfo>
    </ContainerMatch>
  )
}

const DateMatch = styled.span`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  font-weight: bold;
  color: white;
  font-size: 12px;
`

const ScoreExterieur = styled.input`
  color: ${props => props.inputColor || 'white'};
  font-weight: ${props => props.inputWeight || 'bold'};
  display: flex;
  position: relative;
  top: 45%;
  height: 30px;
  width: 28px;
  font-weight: bold;
  background: #0275ea;
  border: none;
  border-radius: 7px;
  margin-left: auto;
  text-align: center;
`

const ScoreDomicile = styled.input`
  color: ${props => props.inputColor || '#eb8400'};
  font-weight: ${props => props.inputWeight || 'bold'};
  display: flex;
  position: relative;
  top: 45%;
  height: 30px;
  width: 28px;
  font-weight: bold;
  background: gold;
  border: none;
  border-radius: 7px;
  text-align: center;
`

const ContainerScore = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: auto;
  width: 75px;
  height: 75px;
  margin-left: 15px;
  margin-right: 15px;
  border-radius: 5px;
`

const LogoExt = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 6px;
  margin-top: auto;
`

const LogoDom = styled.img`
  width: 54px;
  margin-left: 6px;
  margin-bottom: -2px;
  margin-right: 4px;
  height: 39px;
  margin-top: auto;
`

const ContainerInfoTeamExt = styled.p`
  display: flex;
  margin-top: 42px;
`

const ContainerInfoTeamDom = styled.p`
  display: flex;
  margin-top: 43px;
`

const ContainerMatchInfo = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -1em;
  font-size: 14px;
  color: white;
  font-weight: bold;
`

const ContainerMatch = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  margin-left: 6px;
  margin-right: 6px;
  height: -webkit-fill-available;
`

const ContainerJourneeTitre = styled.p`
  display: flex;
  margin: auto;
  color: white;
  font-weight: bold;
`

const ContainerJournee = styled.div`
  border: 2px solid #288aef;
  display: flex;
  width: 99%;
  height: 60px;
  background-color: #288aef;
  border-radius: 10px;
`

const ContainerInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 375px;
  height: 500px;
  background-color: 288aef;
  margin-top: 10%;
  margin-bottom: 10%;
  /* border: 5px solid black; */
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

export default MatchPronoCard
