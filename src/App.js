import React, { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { useSelector } from 'react-redux'
// import Featured from './components/Featured'

// import Auth from './components/Auth/Login'
import Recipe from './pages/Recipe'
import Register from './components/Auth/Register'
import { UserRemoveIcon } from '@heroicons/react/outline'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Exp from './pages/Exp'

// import TopNav from './components/TopNav'
// import TopNav from './components/TopNav'
//
// import Delivery from './components/Delivery'
// import Meal from './components/Meal'
// import Categories from './components/Categories'
// import NewLatter from './components/NewLatter'
// import Footer from './components/Footer'



const App = () => {
    return (
      <div className='app'>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Recipe/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='exp' element={<Exp/>}/>
        </Routes>
        </BrowserRouter>
      </div>
                                             
  
  )
}

export default App
