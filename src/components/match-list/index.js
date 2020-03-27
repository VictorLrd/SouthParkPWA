import React, { useState } from 'react'
import styled from 'styled-components'
import MatchFinishedCard from '../match-finished-card'
import MatchPronoCard from '../match-prono-card'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import allTheActions from '../../actions'

import { Link } from 'react-router-dom'

import { themeLight, themeDark } from '../../config/theme'

const MatchList = ({ matchs, save }) => {
  const [journee, setJournee] = useState('Round 1')
  const journees = [
    'Round 1',
    'Round 2',
    'Round 3',
    'Round 4',
    'Round 5',
    'Round 6',
    'Round 7',
    'Round 8',
    'Round 9',
    'Round 10',
    'Round 11',
    'Round 12',
    'Round 13',
    'Round 14',
    'Round 15',
    'Round 16',
    'Round 17',
    'Round 18',
    'Round 19',
    'Round 20',
    'Round 21',
    'Round 22',
    'Round 23',
    'Round 24',
    'Round 25',
    'Round 26',
    'Round 27',
    'Round 28',
    'Round 29',
    'Round 30',
    'Round 31',
    'Round 32',
    'Round 33',
    'Round 34',
    'Round 35',
    'Round 36',
    'Round 38'
  ]
  return (
    <SectionMain>
      <Container>
        <ContainerInfo>
          <ContainerJournee>
            <ContainerJourneeTitre>
              <select onChange={e => setJournee(e.target.value)}>
                {journees.map(j => (
                  <option key={j} value={j}>
                    {j}
                  </option>
                ))}
              </select>
            </ContainerJourneeTitre>
          </ContainerJournee>
          <ContainerMatch>
            {matchs
              .filter(m => m.journee === journee)
              .map(m =>
                m && m.isFinished ? (
                  <ContainerFinishMatch>
                    <ContainerLinkMatch>
                      <LinkStat href={`/match-stat/${m.idApi}`}>
                        Stat +
                      </LinkStat>
                    </ContainerLinkMatch>
                    <ContainerFinishMatch>
                      <MatchFinishedCard key={m._id} match={m} />
                    </ContainerFinishMatch>
                  </ContainerFinishMatch>
                ) : (
                  <MatchPronoCard key={m._id} match={m} />
                )
              )}
          </ContainerMatch>
          {matchs.filter(m => m.journee === journee && !m.isFinished).length ? (
            <DivSaveButton>
              <SaveButton onClick={save}>Sauvegarder mes matchs</SaveButton>
            </DivSaveButton>
          ) : (
            ''
          )}
        </ContainerInfo>
      </Container>
    </SectionMain>
  )
}

const ContainerMatch = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid black;
  margin-left: 6px;
  margin-right: 6px;
  height: -webkit-fill-available;
`

const ContainerFinishMatch = styled.div``
const ContainerLinkMatch = styled.div`
  display: flex;
  justify-content: center;
`

const LinkStat = styled.a`
  text-decoration: none;
  color: white;
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
  background-color: 288aef;
  margin-top: 3%;
  margin-bottom: 5%;
  border: 5px solid ${props => props.theme.secondary};
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.primary};
`
const SectionMain = styled.body`
  /* background-color:#134886; */
`

const DivSaveButton = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
`

const SaveButton = styled.button`
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

const mapDispatchToProps = () => dispatch => ({
  actions: {
    theme: bindActionCreators(allTheActions.theme, dispatch)
  }
})

export default connect(null, mapDispatchToProps)(MatchList)
