import { connect } from 'react-redux'
import { setVisibilityFilter } from '../redux/actions'
import Button from '../components/Buttons'

const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter == state.todoListFilter
    // active: console.log(ownProps, 'button')
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Button)
