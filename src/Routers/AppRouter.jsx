import React from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import MainLayout from '../Layout/MainLayout'
import Home from '../Pages/Home/Home'
import Category from '../Pages/Category/Category'
import About from '../Pages/About/About'
import Search from '../Pages/Search/Search'


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route  path="/" element ={<MainLayout/> }>
            <Route  index element={<Home/>}/> 
            <Route  path='/Category' element={<Category/>}/>
            <Route  path='/Search' element={<Search/>}/>
            <Route  path='/About' element={<About/>}/>
                
        </Route>
        
        
    </Routes>
    </BrowserRouter>
  )
}

export default AppRouter;