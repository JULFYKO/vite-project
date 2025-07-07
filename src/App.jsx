import { useState, createContext } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ToDoList from './components/ToDoList'
import Counter from './components/Counter'
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import ReviewsPage from './components/ReviewsPage'
import Git from './components/Git'

export const ToDoContext = createContext();

const TASKS = [
  { id: 1, title: 'First task', important: false, complete: false, date: '01.04.2023' },
  { id: 2, title: 'Second task', important: false, complete: false, date: '01.04.2023' },
  { id: 3, title: 'Third task', important: true, complete: true },
  { id: 4, title: 'Fourth task', important: true, complete: false, date: '01.04.2023' },
  { id: 5, title: 'Fifth task', important: false, complete: false },
  { id: 6, title: 'Sixth task', important: true, complete: false },
  { id: 7, title: 'Seventh task', important: true, complete: true },
  { id: 8, title: 'Eighth task', important: false, complete: true }
]
const OTHER_TASKS = [
  { id: 1, title: 'Test task', important: true, complete: true, date: '01.04.2023' },
  { id: 2, title: 'Blabla task', important: false, complete: false, date: '01.04.2023' },
  { id: 3, title: 'Super task', important: true, complete: true }
]

function App() {
  // Глобальний стан задач (для list1)
  const [tasks, setTasks] = useState(TASKS);

  // Функція для оновлення задач (оновлення статусу, видалення, додавання)
  const updateTask = (id, changes) => {
    setTasks(tasks =>
      tasks.map(task =>
        task.id === id ? { ...task, ...changes } : task
      )
    );
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const addTask = (task) => {
    const newId = tasks.length > 0 ? Math.max(...tasks.map(i => i.id)) + 1 : 1;
    setTasks([...tasks, { ...task, id: newId }]);
  };

  return (
    <ToDoContext.Provider value={{
      tasks,
      updateTask,
      removeTask,
      addTask
    }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="counter" element={<Counter />} />
            <Route path="list1" element={<ToDoList />} />
            <Route path="list2" element={<ToDoList tasksList={OTHER_TASKS} />} />
            <Route path="reviews" element={<ReviewsPage />} />
            <Route path="git" element={<Git />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ToDoContext.Provider>
  )
}

export default App