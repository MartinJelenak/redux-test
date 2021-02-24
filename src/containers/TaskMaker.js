import React, { useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { todoMakeA } from '../redux/actions'
import { connect } from 'react-redux'
import { Button, TextField } from "@material-ui/core";





const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'auto',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    margin: {
        margin: '15px 0px 0px 0px'
    }
}));

const TaskMaker = ({ dispatch }) => {
    const classes = useStyles();
    const [err, setErr] = useState(false)
    let input
    let textInput = useRef(null)

    const cilickHandle = () => {
        console.log(input)
        if (input != undefined && input != '') {
            dispatch(todoMakeA(input))
            textInput.current.value = ""
            input = ''
            setErr(false)
        } else {
            setErr(true)
        }
    }
    return (
        <form>
            <div className={classes.root}>
                <TextField
                    label="Size"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="medium"
                    fullWidth
                    inputRef={textInput}
                    onChange={e => {
                        e.preventDefault()
                        input = e.target.value
                        console.log(input)

                    }}
                    value={input}
                />
            </div>
            <div className={classes.root}>
                <Button
                    className={classes.margin}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    size="large"
                    onClick={e => {
                        e.preventDefault()
                        cilickHandle()
                    }
                    }>
                    Add
            </Button>
            </div>
        </form>
    );
}


export default connect()(TaskMaker)