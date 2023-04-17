import React from 'react'
import {Route, BrowserRouter as Router, Routes} from 'react-router-dom'
import Home from '../componnets/home'
import Page404 from '../componnets/Page404'
const AppRoutes = () => {
  return (
  <Router>
    <Routes>
         <Route path='/' element={<Home/>}/>


         <Route path='*' element={<Page404/>}/>

    </Routes>
  </Router>
  )
}

export default AppRoutes