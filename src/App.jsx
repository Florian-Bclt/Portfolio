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
import Vitrine from './components/tarif/Vitrine'
import Maintenance from './components/tarif/Maintenance'
import Webmaster from './components/tarif/Webmaster'
import Dynamique from './components/tarif/Dynamique'

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
        <Route path='/vitrine' element={<Vitrine />} />
        <Route path='/dynamique' element={<Dynamique />} />
        <Route path='/maintenance' element={<Maintenance />} />
        <Route path='/webmaster' element={<Webmaster />} />
        <Route path='/cgv' element={<CGV />} />
      </Routes>
    </>
  )
}

export default App