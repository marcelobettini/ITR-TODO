import { useState } from 'react';

import './App.css';
import TaskList from './components/TaskList';
import Input from './components/Input';
import SearchBar from './components/SearchBar';
const initState = {
  id: 1,
  title: "crear una simple lista de tareas",
  isCompleted: false
};
function App() {
  const [tasks, setTasks] = useState([initState]);

  //state should update where it lives -> custom events🥴
  return (
    <div className="App">
      <Input setTask={setTasks} />
      <TaskList tasks={tasks} />
      <SearchBar />

    </div>
  );
}

export default App;
