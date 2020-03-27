import React from 'react'
import styled from 'styled-components'

const MatchStat = ({ match }) => {
  return (
    <Container>
      <ContainerMatchInfo>
        {match.match_hometeam_name}
        <LogoDom src={match.team_home_badge}></LogoDom>{' '}
        <ContainerScore>
          {' '}
          <ScoreDetail>
            {match.match_hometeam_score} - {match.match_awayteam_score}
          </ScoreDetail>
        </ContainerScore>{' '}
        <LogoExt src={match.team_away_badge}></LogoExt>
        {match.match_awayteam_name}
      </ContainerMatchInfo>
      <DateMatch>
        <strong>
          <u>Date du match :</u>
        </strong>{' '}
        {match.match_date}
      </DateMatch>
      <StatsMatch>
        <strong>
          <u>But :</u>
        </strong>
        <ListStatMatch>
          {match.goalscorer
            ? match.goalscorer.map((goal, index) => (
                <StatMatch key={index}>
                  {goal.home_scorer !== ''
                    ? goal.home_scorer
                    : goal.away_scorer}{' '}
                  {goal.time}" ({goal.score})
                </StatMatch>
              ))
            : ''}
        </ListStatMatch>
      </StatsMatch>
      <StatsMatch>
        <strong>
          <u>Cartons :</u>
        </strong>
        <ListStatMatch>
          {match.cards
            ? match.cards.map((card, index) => (
                <StatMatch key={index}>
                  {card.home_fault !== '' ? card.home_fault : card.away_fault}{' '}
                  {card.time}" ({card.card === 'red card' ? 'Rouge' : 'Jaune'})
                </StatMatch>
              ))
            : ''}
        </ListStatMatch>
      </StatsMatch>
      <StatsMatch>
        <strong>
          <u>Statistiques :</u>
        </strong>
        <ListStatMatch>
          {match.statistics
            ? match.statistics.map((stat, index) => (
                <StatMatch key={index}>
                  {stat.type}: {stat.home} - {stat.away}
                </StatMatch>
              ))
            : ''}
        </ListStatMatch>
      </StatsMatch>
    </Container>
  )
}

const Container = styled.div``

const DateMatch = styled.p`
  color: white;
`

const StatsMatch = styled.div`
  color: white;
`

const ListStatMatch = styled.ul``

const StatMatch = styled.li`
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
export default MatchStat
