import { useState } from 'react';
import './App.css'

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>('');

  const addTask = (): void => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { 
      id: Date.now(), 
      title: newTask, 
      completed: false 
    }]);
    setNewTask('');
  };

  const toggleTaskCompletion = (id: number): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? {  ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id: number): void => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-400'>
      <div className='bg-white p-6 rounded shadow-md w-96'>
        <h1 className='text-3xl font-bold mb-4'>To-Do List</h1>
        <div className='flex mb-5'>
          <input
            className='border-2 border-gray-300 flex-grow p-2 rounded'
            type='text'
            placeholder='Add a new task'
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          /></div><div className='flex justify-center items-center mb-4'>
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded ml-2'
            onClick={addTask}
          >
            Add
          </button>
        </div>
        <ul>
          {tasks.map((task) => (
            <li
              key={task.id}
              className={`flex justify-between items-center p-2 border-b ${
                task.completed ? 'line-through text-gray-500' : ''
              }`}
            >
              <span>{task.title}</span>
              <div>
                <button
                  className='text-green-500 hover:text-green-700 mr-2'
                     onClick={() => toggleTaskCompletion(task.id)}
                >
                  {task.completed ? 'Undo' : 'Done'}
                </button>
                <button
                  className='text-red-500 hover:text-red-700'
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
