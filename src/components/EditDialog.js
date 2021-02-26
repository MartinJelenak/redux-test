import React, { useState, bind } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({

}));

export default function EditDialog({
    editState,
    handleClickEdit,
    defaultText,
    editDialogChange,
    idTodo
}) {
    const classes = useStyles();
    const [editText, setEditText] = useState('')
    console.log(editText)

    return (
        <Dialog open={editState}
            onClose={handleClickEdit}
            aria-labelledby="form-dialog-title">
            <DialogTitle
                id="form-dialog-title"
            >
                Edit
            </DialogTitle>
            <DialogContent>
                <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Todo"
                    type="email"
                    fullWidth
                    defaultValue={defaultText}
                    variant="outlined"
                    onChange={e => {
                        e.preventDefault()
                        setEditText(e.target.value)
                    }}
                />
            </DialogContent>
            <DialogActions>
                <form>
                    {/* <Button onClick={handleClickEdit} color="primary">
                    Cancel
                     </Button> */}
                    <Button
                        color="primary"
                        onClick={() => editDialogChange(idTodo, editText)}
                    >
                        Change
                     </Button>
                </form>
            </DialogActions>
        </Dialog>
    )
}