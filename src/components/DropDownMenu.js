import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({

}));



export default function DropDownMenu({ anchorEl, handleClose, hadleClickEdit }) {
    const classes = useStyles();
    // const [editState, setEditState] = useState(false);


    return (
        <>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={anchorEl ? true : false}
                onClose={handleClose}
            >
                <MenuItem
                    onClick={hadleClickEdit}>
                    Edit
                    </MenuItem>
                {/* <MenuItem onClick={handleDelete}>Delete</MenuItem> */}
            </Menu>
        </>
    )
}