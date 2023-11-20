import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home  from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Profile from './pages/Profile'

export default function App() {
  return <BrowserRouter><Routes>
    <Route path='/' element={<Home/>}/>
   <Route path='/sign-in' element={<Signin/>}/>
  <Route path='/sign-out' element={<Signout/>}/>
   <Route path='/profile' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>
  
  </Routes>
  </BrowserRouter>
}

