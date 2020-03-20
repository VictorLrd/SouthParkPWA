import React, { Component } from 'react'
import styled from 'styled-components'
import logo from './logo.png'
import { FaPowerOff, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  return (
    <NavBar>
      <a href='#!'>
        <Logo src={logo}></Logo>
      </a>
      <DivLinks>
        <LinkIcons href='#!'>
          <FaPowerOff />
        </LinkIcons>
        <LinkIcons href='#!'>
          <FaUserCircle />
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
export default Navbar
