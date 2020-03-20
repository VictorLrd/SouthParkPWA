import React from 'react'
import styled from 'styled-components'
import logoDom from '../../assets/dom.png'
import logoExt from '../../assets/ext.png'

const MatchFinished = () => {
  return (
    <SectionMain>
      <Container>
        <ContainerInfo>
          <ContainerJournee>
            <ContainerJourneeTitre>32ème journée</ContainerJourneeTitre>
          </ContainerJournee>
          <ContainerMatch>
            <ContainerMatchInfo>
              RB Leipzig<LogoDom src={logoDom}></LogoDom>{' '}
              <ContainerScore>
                {' '}
                <ScoreDetail>2 - 2</ScoreDetail>
                <ScorePronostic> Mon score (3-0) </ScorePronostic>
                <Points>
                  {' '}
                  <ScoreColor /> 1 point
                </Points>
              </ContainerScore>{' '}
              <LogoExt src={logoExt}></LogoExt> Tottenham{' '}
            </ContainerMatchInfo>
          </ContainerMatch>
        </ContainerInfo>
      </Container>
    </SectionMain>
  )
}

const ScoreColor = styled.p`
  display: flex;
  width: 30px;
  height: 8px;
  background: green;
  border-radius: 80px;
`

const Points = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
`

const ScorePronostic = styled.p`
  margin-bottom: 2px;
  display: flex;
  justify-content: center;
  font-size: 8px;
  color: white;
`

const ScoreDetail = styled.p`
  margin: auto;
  font-size: 10px;
  display: flex;
  justify-content: center;
  font-weight: bold;
  color: white;
`

const ContainerScore = styled.div`
  border: 2px solid black;
  width: 140px;
  height: 70px;
  background-color: #1778e9;
  margin-left: 10px;
  margin-right: 12px;
  border-radius: 5px;
  display: grid;
`

const LogoExt = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 6px;
  margin-top: 5px;
`

const LogoDom = styled.img`
  width: 48px;
  margin-left: 6px;
  margin-bottom: 8px;
  margin-right: 5px;
  height: 40px;
`

const ContainerMatchInfo = styled.p`
  display: flex;
  flex-direction: row;
  margin-top: 55px;
  font-size: 14px;
  color: white;
  font-weight: bold;
`

const ContainerMatch = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
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
  width: 100%;
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
  border: 5px solid black;
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

export default MatchFinished
