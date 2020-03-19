import React from 'react'
import styled from 'styled-components'

const CharactersDetails = () => {
  return (
    <div>
      <StyledImage
        src={'http://i.annihil.us/u/prod/marvel/i/mg/c/e0/535fecbbb9784.jpg'}
      ></StyledImage>
    </div>
  )
}

const StyledImage = styled.img`
  width: 100%;
  height: 300px;
`

export default CharactersDetails
