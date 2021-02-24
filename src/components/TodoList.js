import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 'auto',
    },
    div: {
        diplay: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '50%, auto'
    }
}));



export default function TodoList({ todos, toggleTodo, sectionName }) {
    const classes = useStyles();
    console.log(todos)


    switch (todos.length) {
        case 0:
            return (
                <div className={classes.div}>
                    <h3 className={classes.div}>No task in {sectionName} sections yet!</h3>
                </div>
            )
        default:
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

}

