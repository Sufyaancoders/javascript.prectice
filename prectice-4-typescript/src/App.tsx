import { AppBar, Button, Container, Stack, TextField, Toolbar, Typography } from '@mui/material'
import './App.css'
import TodoItem from './components/Todoitem'
import { useState } from 'react';
function App() {
  const [items, setItems] = useState<TodoitemType[]>([
    { tittle: 'Learn TypeScript', isCompleted: false, id: 1 },
    { tittle: 'Build a React App', isCompleted: false, id: 2 },
    { tittle: 'Master Material-UI', isCompleted: false, id: 3 },
  ]);
  const [inputvalue, setInputValue] = useState<string>('');
  const addItem = (newItem: TodoitemType) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleAddTask = () => {
    const newTask = {
      tittle: inputvalue,
      isCompleted: false,
      id: items.length + 1,
    };
    addItem(newTask);
    setInputValue(''); // Clear the input field after adding the task
  };
const isCompleted = (id: number): void => {
  setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    )
  );
};
 const deleted = (): void => {
  setItems((prevItems) => prevItems.filter((item) => !item.isCompleted));
 }
 const todoEdite = (id: number, newTitle: string): void => {
  setItems((prevItems) =>
    prevItems.map((item) =>
      item.id === id ? { ...item, tittle: newTitle } : item
    )
  );
 };
  return (
    <>
      <Container maxWidth="md" sx={{ height: '100vh' }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">Welcome to React with TypeScript</Typography>
          </Toolbar>
        </AppBar>

        <Stack direction="column" height="80%" spacing={2} mt={2} p={1}>
          {items.map((item) => (
            <TodoItem Completed={() => isCompleted(item.id)} deleted={() => deleted()} key={item.id} item={item} Edites={(newTitle) => todoEdite(item.id, newTitle)}   />
          ))}
        </Stack>

        <TextField fullWidth label="New Task" variant="outlined" 
        value={inputvalue}
        onChange={(e) => setInputValue(e.target.value)}
        />
        <Button variant="contained" color="primary" fullWidth onClick={handleAddTask}>
          Add Task
        </Button>
        <Button color='secondary' fullWidth onClick={deleted}>all marked deleted</Button>
      </Container>
    </>
  );
  };



export default App
