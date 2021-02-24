import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function TodoList({ todos, toggleTodo }) {
    const classes = useStyles();
    console.log(todos)

    return (
        <List dense className={classes.root}>
            {todos.slice(0).reverse().map(row => {
                return (
                    <Todo
                        key={row.id}
                        {...row}
                        onClick={() => toggleTodo(row.id)}
                    />
                )
            })}
        </List>
    );
}

