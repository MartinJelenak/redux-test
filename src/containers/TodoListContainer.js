import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { visibilityFilters, toggleTodo, editDialogChange } from '../redux/actions'
// import _ from 'lodash';


const setSectionName = filter => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return 'ALL'
        case visibilityFilters.SHOW_COMPLETED:
            return 'COMPLETED'
        case visibilityFilters.SHOW_ACTIVE:
            return 'ACTIVE'
    }
}

const getVisibleTodos = (todos, filter) => {
    switch (filter) {
        case visibilityFilters.SHOW_ALL:
            return todos
        case visibilityFilters.SHOW_COMPLETED:
            return todos.filter(t => t.completed)
        case visibilityFilters.SHOW_ACTIVE:
            return todos.filter(t => !t.completed)
        default:
            throw new Error('Unknown filter: ' + filter)
    }
}

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.todoListFilter),
    sectionName: setSectionName(state.todoListFilter),
    // setDialogVisible:  
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id)),
    editDialogChange: (id, newText) => dispatch(editDialogChange(id, newText))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
