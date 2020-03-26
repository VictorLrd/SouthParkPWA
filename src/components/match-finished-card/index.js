import React from 'react'
import styled from 'styled-components'
import logoDom from '../../assets/dom.png'
import logoExt from '../../assets/ext.png'

const MatchFinished = ({ match }) => {
  return (
    <ContainerMatchInfo>
      {match.dom}
      <LogoDom src={match.logoDom}></LogoDom>{' '}
      <ContainerScore>
        {' '}
        <ScoreDetail>
          {match.scoreFinalHom} - {match.scoreFinalExt}
        </ScoreDetail>
        <ScorePronostic>
          {' '}
          Mon score ({match.scoreDomUser}-{match.scoreExtUser}){' '}
        </ScorePronostic>
        <Points>
          {' '}
          <ScoreColor
            color={
              match.scoreFinalHom === match.scoreDomUser &&
              match.scoreExtUser === match.scoreFinalExt
                ? 'green'
                : 'red'
            }
          />{' '}
          {match.scoreDomUser == null || match.scoreExtUser == null
            ? 'Pas prono'
            : match.scoreFinalHom === match.scoreDomUser &&
              match.scoreExtUser === match.scoreFinalExt &&
              match.scoreFinalHom === match.scoreDomUser &&
              match.scoreExtUser === match.scoreFinalExt
            ? '20 points'
            : match.scoreFinalHom === match.scoreDomUser &&
              match.scoreExtUser === match.scoreFinalExt &&
              match.scoreFinalHom > match.scoreFinalExt
            ? '10 points'
            : match.scoreFinalHom === match.scoreDomUser &&
              match.scoreExtUser === match.scoreFinalExt &&
              match.scoreFinalHom > match.scoreFinalExt
            ? '15 points'
            : '0 point'}
        </Points>
      </ContainerScore>{' '}
      <LogoExt src={match.logoExt}></LogoExt>
      {match.ext}
    </ContainerMatchInfo>
  )
}

const ScoreColor = styled.p`
  display: flex;
  width: 30px;
  height: 8px;
  background: ${props => props.color};
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
export default MatchFinished
