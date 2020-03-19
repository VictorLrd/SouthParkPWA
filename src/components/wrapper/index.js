import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Wrapper = ({ children }) => {
  const [counter, setCounter] = useState(10)
  useEffect(() => {
    document.title = counter
  }, [counter])
  return (
    <AllContainer>
      {/* <p>{counter}</p>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(counter - 1)}>-</button> */}
      {children}
      {/* <InputContainer>
        <StyledInput placeholder='Email'></StyledInput>
        <StyledInput placeholder='Mot de passe'></StyledInput>
      </InputContainer> */}
    </AllContainer>
  )
}

const AllContainer = styled.div`
  /* background-color: #485358; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
`

const InputContainer = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
`

const StyledInput = styled.input`
  height: 45px;
  padding: 0px 10px;
  outline: none;
  border: none;
  margin: 1px 0px;
`

export default Wrapper
