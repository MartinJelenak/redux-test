import React from 'react'
import TaskMaker from './containers/TaskMaker'
import TodoListContainer from './containers/TodoListContainer'
import SettingBar from './components/SettingBar'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '500px',
    minWidth: '295px'
  }
}));

export default function App() {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <Typography component="div"  >
        <h1>Todo app</h1>
        <TaskMaker />
        <SettingBar />
        <TodoListContainer />
      </Typography >
    </Container>
  )
}
