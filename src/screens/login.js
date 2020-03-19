import React from 'react'
import styled from 'styled-components'

import ArticlePreview from '../components/articlePreview'
import Wrapper from '../components/wrapper'
import AppContext from '../utils/context'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'

const Login = ({ t }) => {
  return (
    <Wrapper>
      <p>{t('menu')}</p>
      <button onClick={() => i18next.changeLanguage('fr')}>fr</button>
      <button onClick={() => i18next.changeLanguage('en')}>en</button>
      <ArticlePreview
        titre='Dsk et oui oui se parlent'
        content='Dsk ne comprend pas non non'
      ></ArticlePreview>
    </Wrapper>
  )
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  /* background-color: red; */
  align-items: center;
  justify-content: center;
`

export default withTranslation()(Login)
// export default Login
