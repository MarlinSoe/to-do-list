import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import { toast } from 'react-hot-toast'
import ToDoDetail from './pages/ToDoDetail'
import ToDoCreate from './pages/ToDoCreate'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='to-do-list' element={<ToDoCreate/>}/>
        <Route path='to-do-list/:id' element={<ToDoDetail/>}/>
      </Routes>
      

    </>
  )
}

export default App
