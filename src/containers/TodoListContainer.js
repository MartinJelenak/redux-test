import { connect } from 'react-redux'
import TodoList from '../components/TodoList'
import { toggleTodo } from '../redux/actions'


const mapStateToProps = state => ({
    todos: state
})

const mapDispatchToProps = dispatch => ({
    toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TodoList)
