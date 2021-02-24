import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme) => ({

}));

export default function Todo(props) {
    const classes = useStyles();
    return (
        <ListItem key={props.id} button>
            <ListItemText id={props.text} primary={props.text} />
            <ListItemSecondaryAction>
                <Checkbox
                    checked={props.completed}
                    edge="end"
                    onChange={props.onClick}
                />
            </ListItemSecondaryAction>
        </ListItem>
    );
}