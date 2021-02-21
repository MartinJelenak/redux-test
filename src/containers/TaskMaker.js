import React from 'react'
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { todoMakeA } from '../redux/actions'

let input

function TaskMaker({ dispatch }) {
    return (
        <div>
            <TextField
                id="outlined-todo-input"
                label="Todo"
                type="text"
                variant="outlined"
                onChange={e => {
                    e.preventDefault()
                    input = e.target.value
                    console.log(input)

                }}
                value={input}
            />
            <Button variant="contained" color="primary" disableElevation size="large"
                onClick={e => {
                    dispatch(todoMakeA(input))
                    input = ''
                }
                }>
                Add todo
            </Button>
        </div >
    )
}

export default connect()(TaskMaker)

