import { connect } from 'react-redux'
import { toggleTodo } from '../redux/actions'
import TodoList from '../components/TodoList'
import { visibilityFilters } from '../redux/actions'
// import _ from 'lodash';


const getVisibleTodos = (todos, filter) => {
    // console.log(todos.filter(t => (
    //     t.completed
    // )), 'filter')
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
    todos: getVisibleTodos(state.todos, state.todoListFilter)
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
