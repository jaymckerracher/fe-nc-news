import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Article from './components/Article'
import Error from './components/Error'
import Profile from './components/Profile'
import SignIn from './components/SignIn'
import InvalidPath from './components/InvalidPath'

function App() {
  const {errorClass, setErrorClass} = useState('error-container hide-error')

  return (
    <>
      <Error errorClass={errorClass}/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<Article />}/>
        <Route path='/profile' element={<Profile/>}></Route>
        <Route path='/login' element={<SignIn />}></Route>
        <Route path='*' element={<InvalidPath message="This page doesn't exist!"/>}></Route>
      </Routes>
      <Footer />
    </>
  )
}

export default App
