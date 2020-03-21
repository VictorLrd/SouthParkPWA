import React from 'react'
import styled from 'styled-components'
import MatchProno from '../components/match-prono'

const Pronos = () => {
  return (
    <Container>
      <MatchProno></MatchProno>
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

export default Pronos
