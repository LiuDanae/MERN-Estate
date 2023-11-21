import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home  from './pages/Home';
import About from './pages/About';
import Signin from './pages/Signin';
import Signout from './pages/Signout';
import Profile from './pages/Profile';
import Header from './components/Header';

export default function App() {
  return <BrowserRouter>
  <Header/>
  <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/sign-in' element={<Signin/>}/>
   <Route path='/sign-out' element={<Signout/>}/>
   <Route path='/profile' element={<Profile/>}/>
   <Route path='/about' element={<About/>}/>
  </Routes>
  </BrowserRouter>
}

