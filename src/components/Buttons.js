import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    color: {
        color: theme.palette.lol.color,
    }
}));

export default function Buttons({ active, children, onClick }) {
    const classes = useStyles();
    console.log(active, children)
    return (
        <Button
            fullWidth
            onClick={onClick}
            // disabled={active}
            // variant={active ? 'secondary' : 'primary'}
            variant="contained"
            color={active ? 'secondary' : 'primary'}
        >
            { children}
        </Button >
    )
}