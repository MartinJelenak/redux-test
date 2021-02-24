let nextTodoId = 0
export const todoMakeA = text => ({
    type: 'TODO_MAKE',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const visibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
}

const sectionName = {
    SHOW_ALL: ['SHOW_ALL', 'ALL'],
    SHOW_COMPLETED: ['SHOW_COMPLETED', 'COMPLETED'],
    SHOW_ACTIVE: ['SHOW_ACTIVE', 'ACTIVE']
}