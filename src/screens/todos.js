import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import uuid from 'uuid/v4'

import allTheActions from '../actions'

const Todo = props => {
  console.log('Todo -> props', props)
  const [todo, setTodo] = useState('')

  useEffect(() => {
    console.log(todo)
  })

  const onSubmit = e => {
    e.preventDefault()
    const { actions } = props
    actions.todos.addTodo({
      task: todo,
      id: uuid()
    })
    setTodo('')
  }

  return (
    <Container>
      <TodoListContainer>
        <TodoListHeader>
          <p>TODO</p>
        </TodoListHeader>
        <TodoList>
          <form onSubmit={onSubmit}>
            <TodoInput
              value={todo}
              onChange={e => setTodo(e.target.value)}
            ></TodoInput>
          </form>
        </TodoList>
        <div>
          {props.todosState.todos.map(todo => {
            return (
              <div key={todo.id}>
                <p>{todo.task}</p>{' '}
                <button
                  onClick={() => {
                    props.actions.todos.deleteTodo(todo.id)
                  }}
                >
                  supprimer
                </button>
              </div>
            )
          })}
        </div>
      </TodoListContainer>
    </Container>
  )
}

const TodoListContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: lightcoral;
  flex-direction: column;
  margin: 12px;
  width: 300px;
  min-height: 600px;
  border-radius: 12px;
`

const TodoListHeader = styled.div`
  margin-bottom: 12px;
`

const TodoList = styled.div``

const TodoInput = styled.input`
  outline: none;
  border: none;
  height: 40px;
  width: 200px;
  border-radius: 12px;
  padding: 6px 12px;
  font-size: 20px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const mapStateToProps = state => ({
  todosState: state.todos
})

const mapDispatchToProps = () => dispatch => ({
  actions: {
    todos: bindActionCreators(allTheActions.todos, dispatch)
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Todo)
