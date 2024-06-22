import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
import Tarif from './components/tarif/Tarif'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import CGV from './pages/CGV'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <About/>
            <Services />
            <Tarif />
            <Portfolio />
            <Contact />
            <Footer />
          </>
        } />
        <Route path='/cgv' element={<CGV />} />
      </Routes>
    </>
  )
}

export default App