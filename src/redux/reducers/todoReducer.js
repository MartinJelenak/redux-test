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
        default:
            return state
    }
}

export default todos