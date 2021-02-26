import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import DropDownMenu from './DropDownMenu'
import EditDialog from './EditDialog';

const useStyles = makeStyles((theme) => ({

}));



export default function Todo(props) {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = useState(false);
    const [editState, setEditState] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        console.log(event.currentTarget)
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickEdit = () => {
        setEditState(!editState)
        setAnchorEl(!setAnchorEl)
    }

    const getNewText = text => {

    }




    return (
        <>
            <ListItem
                key={props.id}
                button aria-controls="simple-menu"
                aria-haspopup="true"
                onClick={handleClick}>
                <ListItemText
                    id={props.text}
                    primary={props.text} />
                <ListItemSecondaryAction>
                    <Checkbox
                        checked={props.completed}
                        edge="end"
                        onChange={props.onClick}
                    />
                </ListItemSecondaryAction>
            </ListItem>
            <DropDownMenu
                anchorEl={anchorEl}
                handleClose={handleClose}
                hadleClickEdit={handleClickEdit} />
            <EditDialog
                editState={editState}
                handleClickEdit={handleClickEdit}
                defaultText={props.text}
                idTodo={props.id}
                editDialogChange={props.editDialogChange} />
        </>
    );
}