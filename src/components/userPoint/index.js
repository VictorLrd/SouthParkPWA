import React from 'react'
import styled from 'styled-components'

const MatchPronoCard = ({ user, place }) => {
  return (
    <ContainerClassment>
      <ContainerUser>
        <Place>{place} - </Place>
        <Username>{user.username}</Username>
        <Point>{user.totalPoint} point</Point>
      </ContainerUser>
    </ContainerClassment>
  )
}

const ContainerUser = styled.div`
  display: flex;
  color: white;
  font-weight: bold;
  padding: 20px;
  align-items: center;
`

const ContainerClassment = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid black; */
  margin-left: 6px;
  margin-right: 6px;
  height: -webkit-fill-available;
`
const Username = styled.p`
  margin-right: 30px;
`

const Point = styled.p``

const Place = styled.h2``

export default MatchPronoCard
