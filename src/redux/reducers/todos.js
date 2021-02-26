const todos = (state = [], action) => {
    console.log(action)
    switch (action.type) {
        case 'TODO_MAKE':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        case 'EDIT_TEXT':
            return state.map(todo =>
                (todo.id === action.id)
                    ? { ...todo, text: action.newText }
                    : todo
            )
        default:
            return state
    }
}

export default todos