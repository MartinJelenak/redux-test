import React, { useRef } from "react";
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { todoMakeA } from '../redux/actions'



const TaskMaker = ({ dispatch }) => {
    let input
    let textInput = useRef(null)

    return (
        <div>
            <TextField
                id="outlined-todo-input"
                label="Todo"
                type="text"
                variant="outlined"
                inputRef={textInput}
                onChange={e => {
                    e.preventDefault()
                    input = e.target.value
                    console.log(input)

                }}
                value={input}
            />
            <Button
                variant="contained"
                color="primary"
                disableElevation
                size="large"
                onClick={e => {
                    dispatch(todoMakeA(input))
                    textInput.current.value = ""
                }
                }>
                Add todo
            </Button>
        </div >
    )
}

export default connect()(TaskMaker)

