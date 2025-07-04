import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './component/layout/UserLayout'

const App = () => {
  return (

    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout />}>{/*user layout*/}</Route>

          <Route>{/*admin layout*/}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App