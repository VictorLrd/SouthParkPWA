import { ADD_TODO, DELETE_TODO } from '../actions/todos'

const initialState = {
  todos: []
}

const deleteTodo = (todos, id) => {
  console.log('deleteTodo -> state', todos)
  console.log('deleteTodo -> id', id)
  const newTodos = todos.filter(todo => todo.id !== id)
  return newTodos
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: deleteTodo(state.todos, action.id)
      }
    default:
      return state
  }
}
