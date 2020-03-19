export const ADD_TODO = 'ADD_TODO'
export const DELETE_TODO = 'DELETE_TODO'

export const addTodo = payload => ({
  type: ADD_TODO,
  payload
})

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id
})
