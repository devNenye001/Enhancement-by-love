
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/footer/footer'
import Navbar from './components/navbar/navbar'
import Hero from './components/sections/hero/hero'
import NotFound from './pages/notFound/notFound'
import Home from './pages/home/home'

function App() {
 

  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
