import React from 'react'
import styled from 'styled-components'
import MatchFinished from '../components/match-finished'

const Matchs = () => {
  return (
    <Container>
      <MatchFinished></MatchFinished>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  color: grey;
`

export default Matchs
