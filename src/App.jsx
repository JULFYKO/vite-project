import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ToDoList from './components/ToDoList'
import Counter from './components/Counter'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import NoPage from './components/NoPage'
import Layout from './components/Layout'
import CreateTask from './components/CreateTask'
import ReviewsPage from './components/ReviewsPage'
import Git from './components/Git'

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
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="counter" element={<Counter />} />
          <Route path="create" element={<CreateTask />} />
          <Route path="list1" element={<ToDoList tasksList={TASKS} />} />
          <Route path="list2" element={<ToDoList tasksList={OTHER_TASKS} />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="git" element={<Git />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App