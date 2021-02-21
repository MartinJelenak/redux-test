import React from 'react'
import TaskMaker from './containers/TaskMaker'
import TodoListContainer from './containers/TodoListContainer'

export default function App() {
  return (
    <div>
      <h1>Todo app</h1>
      <TaskMaker />
      <TodoListContainer />
      {/* <SetingBar /> */}
    </div>
  )
}
