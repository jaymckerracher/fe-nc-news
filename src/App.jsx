import './App.css'
import {Routes, Route} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './components/Home'
import Article from './components/Article'

function App() {

  return (
    <>
      <Header />
      {/* <FontAwesomeIcon icon={faHouse} /> */}
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/articles/:article_id' element={<Article />}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App
