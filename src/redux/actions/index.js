let nextTodoId = 0
export const todoMakeA = text => (
    {
        type: 'TODO_MAKE',
        id: nextTodoId++,
        text
    })