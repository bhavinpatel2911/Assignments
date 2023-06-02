import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Home/Home'
import Login from '../Login/Login'
import Navbar from '../Navbar/Navbar'
import Inquiry from '../Inquiry/Inquiry'
import Sidebar from '../Sidebar/Sidebar'

function Main() {
  return (
    <BrowserRouter>
        <Routes>
            <Route index path='/' element={<> <Navbar/> <Sidebar/> <Home/> </>}></Route>
            <Route path='/Inquiry' element={<> <Navbar/> <Sidebar/> <Inquiry/> </>}></Route>
            <Route path='/Login' element={<> <Navbar/> <Sidebar/> <Login/> </>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Main 