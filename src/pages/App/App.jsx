import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import NewOrderPage from '../NewOrderPage/NewOrderPage'
import AuthPage from '../AuthPage/AuthPage'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage'
import Nav  from '../../components/Nav/Nav'


export default function App() {
  const [user, setUser] = useState(null)

  return (
    <main className="App">
      {
        user ?  
        <>
          <Nav />
          <Routes>
            <Route path='/orders/new' element={<NewOrderPage />} />
            <Route path='/orders' element={<OrderHistoryPage />} />
          </Routes>
        </>
        : 
        <AuthPage />
      }
    </main>
  )
}

