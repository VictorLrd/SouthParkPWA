import React, { useState } from 'react'
import styled from 'styled-components'

const Counter = props => {
  console.log('props', props)
  return (
    <Container>
      <p>{props.label}</p>
      <p>{props.counter}</p>
      <div>
        <button onClick={props.decrementCounter}>-</button>
        <button onClick={props.incrementCounter}>+</button>
      </div>
    </Container>
  )
}

const Container = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.secondary};
  align-items: center;
  justify-content: center;
  margin: 12px;
`

Counter.propTypes = {}

// const mapStateToProps = state => ({
//   counterState: state.counter
// })

// const mapDispatchToProps = () => dispatch => ({
//   actions: {
//     counter: bindActionCreators(allTheActions.counter, dispatch)
//   }
// })

// export default connect(mapStateToProps, mapDispatchToProps)(Counter)
export default Counter
