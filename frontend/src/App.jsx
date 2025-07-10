import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UserLayout from './component/layout/UserLayout'
import Home from './pages/Home'

const App = () => {
  return (

    <div className='w-full overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<UserLayout />}>
            <Route index element={<Home />} />
          </Route>

          <Route>{/*admin layout*/}</Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App