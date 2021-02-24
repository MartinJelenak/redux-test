// import React, { useRef, useState } from "react";
// import { connect } from 'react-redux'
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import { todoMakeA } from '../redux/actions'



// const TaskMaker = ({ dispatch }) => {
//     const [err, setErr] = useState(false)
//     let input
//     let textInput = useRef(null)

//     const cilickHandle = () => {
//         console.log(input)
//         if (input != undefined && input != '') {
//             dispatch(todoMakeA(input))
//             textInput.current.value = ""
//             input = ''
//             setErr(false)
//         } else {
//             setErr(true)
//         }
//     }

//     return (
//         <div>
// <TextField
//     error={err}
//     id="outlined-todo-input"
//     label="Todo"
//     type="text"
//     variant="outlined"
//     inputRef={textInput}
//     size="small"
//     onChange={e => {
//         e.preventDefault()
//         input = e.target.value
//         console.log(input)

//     }}
//     value={input}
// />
//             <div>
//                 <Button
//                     variant="contained"
//                     color="primary"
//                     disableElevation
//                     size="large"
//                     onClick={e => {
//                         cilickHandle()
//                     }
//                     }>
//                     Add todo
//             </Button>
//             </div>
//         </div >
//     )
// }

// export default connect()(TaskMaker)
//---------------------------------------------------------------------


import React, { useRef, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
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
        <div className={classes.root}>
            <div className={classes.root}>
                {/* <InputBase
                    error={err}
                    className={classes.input}
                    inputProps={{ 'aria-label': 'search google maps' }}
                    inputRef={input}
                    onChange={e => {
                        e.preventDefault()
                        input = e.target.value
                        console.log(input)

                    }}
                    value={input}
                /> */}
                <TextField
                    label="Size"
                    id="outlined-size-small"
                    defaultValue=""
                    variant="outlined"
                    size="small"
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
                    fullWidth
                    variant="contained"
                    color="primary"
                    disableElevation
                    size="large"
                    onClick={e => {
                        cilickHandle()
                    }
                    }>
                    Add
            </Button>
            </div>
        </div>
    );
}


export default connect()(TaskMaker)