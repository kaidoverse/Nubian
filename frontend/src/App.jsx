import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './component/layout/UserLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Proflle from './pages/Profile'
import { Toaster } from "sonner"
import Register from './pages/Register'

const App = () => {
  return (

    <div className='w-full overflow-x-hidden'>
      <BrowserRouter>
        <Toaster position='top-right' reverseOrder={false} />
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/profile' element={<Proflle />} />
          </Route>

          <Route>{/*admin layout*/}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App