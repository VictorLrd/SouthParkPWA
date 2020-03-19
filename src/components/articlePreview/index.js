import React from 'react'
import styled from 'styled-components'

import Avatar from '../avatar'

const ArticlePreview = ({ image, titre, content }) => {
  return (
    <Container>
      <Header>
        <ImageContainer>
          <Avatar size={50} src={image} />
        </ImageContainer>
        <TitleContainer>
          <span>{titre}</span>
        </TitleContainer>
      </Header>
      <Content>
        <span>{content}</span>
      </Content>
    </Container>
  )
}

const Content = styled.div`
  min-height: 50px;
`

const TitleContainer = styled.div`
  margin-left: 24px;
`

const ImageContainer = styled.div``

const Header = styled.div`
  display: flex;
  padding: 12px 6px;
  justify-content: space-evenly;
`

const Container = styled.div`
  background-color: #22222249;
  padding: 12px;
  margin: 12px;
  border-radius: 8px;
  width: 100%;
`

export default ArticlePreview
