import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import NotePage from '../NotePage/NotePage'
import AuthPage from '../AuthPage/AuthPage'
import Nav  from '../../components/Nav/Nav'
import { getUser } from '../../utilities/users-service'
import './App.css'


export default function App() {
  const [user, setUser] = useState(getUser())
  return (
    <main className="App">
      {
        user ?  
        <>
          <Nav user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<NotePage />} />
          </Routes>
        </>
        : 
        <AuthPage setUser={setUser} />
      }
    </main>
  )
}

