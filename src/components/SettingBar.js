import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { ButtonGroup, Paper } from '@material-ui/core';
import { visibilityFilters } from '../redux/actions'
import ButtonContainer from '../containers/ButtonContainer'
import { Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
        margin: '20px 0px 5px 0px'
    }
}));

export default function SettingBar() {
    const classes = useStyles();
    return (
        // <Paper component="form" className={classes.root}>
        <ButtonGroup disableElevation variant="contained" color="primary" className={classes.root} component={Button} fullWidth>
            <ButtonContainer filter={visibilityFilters.SHOW_ALL}>ALL</ButtonContainer>
            <ButtonContainer filter={visibilityFilters.SHOW_ACTIVE}>ACTIVE</ButtonContainer>
            <ButtonContainer filter={visibilityFilters.SHOW_COMPLETED}>COMPLETED</ButtonContainer>
        </ButtonGroup>
        // </Paper >
    )
}