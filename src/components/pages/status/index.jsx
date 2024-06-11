import React, { useState } from 'react';
import { Container, Grid, Paper, TextField, Button, List, ListItem, ListItemText, IconButton, Select, MenuItem } from '@mui/material';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AddTaskIcon from '@mui/icons-material/AddTask';
const index = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskStatus, setNewTaskStatus] = useState('open');
  const [editTask, setEditTask] = useState(null);


  const addTask = () => {
    setTasks([...tasks, { title: newTaskTitle, status: newTaskStatus }]);
    setNewTaskTitle('');
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const changeStatus = (index, status) => {
    const updatedTasks = tasks.map((task, i) => i === index ? { ...task, status } : task);
    setTasks(updatedTasks);
  };

  const startEditTask = (index) => {
    setEditTask(index);
    setNewTaskTitle(tasks[index].title);
    setNewTaskStatus(tasks[index].status);
  };

  const updateTask = () => {
    const updatedTasks = tasks.map((task, i) => i === editTask ? { title: newTaskTitle, status: newTaskStatus } : task);
    setTasks(updatedTasks);
    setNewTaskTitle('');
    setEditTask(null);
  };

  return (
    <Container>
      <h1 className='text-primary'>Task Aplication<AssignmentIcon className='fs-2'/></h1>

      <Paper elevation={3} style={{ padding: '10px', marginTop: '20px', marginBottom: '50px' }}>
        <h2>{editTask !== null ? 'Edit Task' : 'Add Task'}</h2>
        <TextField
          label="Task Title"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          fullWidth
        />
        <Select
        required
          value={newTaskStatus}
          onChange={(e) => setNewTaskStatus(e.target.value)}
          fullWidth
          style={{ marginTop: '10px' }}
        >
          {['open', 'pending', 'inprog', 'complete'].map((status) => (
            <MenuItem required key={status} value={status}>{status}</MenuItem>
          ))}
        </Select>
        <Button
          variant="contained"
          color="primary"
          onClick={editTask !== null ? updateTask : addTask}
          style={{ marginTop: '10px' }}
        >
          {editTask !== null ? 'Update Task' : 'Add Task'}
        </Button>
      </Paper>
      <Grid container spacing={3} style={{color: 'bleck'}} >
        {['open', 'pending', 'inprog', 'complete'].map((status) => (
          <Grid item xs={3} key={status}>
            <Paper elevation={3} style={{ padding: '10px' , flexWrap: 'wrap'}}>
              <h2 style={{color: 'bleck'}}>{status}</h2>
              <List style={{flexWrap: 'wrap'}} >
                {tasks.filter(task => task.status === status).map((task, index) => (
                  <ListItem key={index} >
                    <ListItemText primary={task.title} />
                    <IconButton edge="end" aria-label="edit" onClick={() => startEditTask(index)}>
                    <box-icon name='edit' size="24px" color="blue" ></box-icon>
                    </IconButton>
                    <IconButton  edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                    <box-icon type='solid' size="24px" color="blue" name='trash'></box-icon>
                    </IconButton>
                  </ListItem>
                ))}
              </List>
            </Paper>
          </Grid>
        ))}
      </Grid>
   
    </Container>
  );
};

export default index;
