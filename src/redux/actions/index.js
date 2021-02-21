let nextTodoId = 0
export const todoMakeA = text => ({
    type: 'TODO_MAKE',
    id: nextTodoId++,
    text
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})