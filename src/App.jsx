import './App.css'
import {Routes, Route} from 'react-router-dom'
import { useState } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Article from './components/Article'
import Error from './components/Error'

function App() {
  const {errorClass, setErrorClass} = useState('error-container hide-error')

  return (
    <>
      <Error errorClass={errorClass}/>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<Article />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
