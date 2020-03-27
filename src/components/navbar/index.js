import React, { Component } from 'react'
import styled from 'styled-components'
import { FaTrophy, FaUserCircle } from 'react-icons/fa'
import i18next from 'i18next'
import { withTranslation } from 'react-i18next'
import Logout from '../logout'

const Navbar = ({ t }) => {
  return (
    <NavBar>
      <a href='/'>
        <Logo src='logo.png'></Logo>
      </a>
      <DivSlogan>
        <Slogan>{t('slogan')}</Slogan>
      </DivSlogan>
      <DivLinks>
        <LinkIcons>
          <Logout />
        </LinkIcons>
        <LinkIcons href='/group-scores'>
          <FaTrophy />
        </LinkIcons>
        <LinkIcons href='#!'>
          <FaUserCircle />
        </LinkIcons>
        <LinkIcons href='#!'>
          <Flag
            onClick={() => i18next.changeLanguage('fr')}
            src='france.png'
          ></Flag>
        </LinkIcons>
        <LinkIcons href='#!'>
          <Flag
            onClick={() => i18next.changeLanguage('en')}
            src='england.png'
          ></Flag>
        </LinkIcons>
      </DivLinks>
    </NavBar>
  )
}

const NavBar = styled.div`
  display: flex;
  width: 100%;
  height: 3em;
  background-color: #008ad499;
`
const Logo = styled.img`
  height: 100%;
  margin-left: 10px;
`
const DivLinks = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
`
const LinkIcons = styled.a`
  display: block;
  right: 1rem;
  margin: 0 2px;
  font-size: 1.5em;
  color: black;
  padding: 10px 5px;
`

const Flag = styled.img`
  width: 30px;
`
const DivSlogan = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

const Slogan = styled.span``

export default withTranslation()(Navbar)
