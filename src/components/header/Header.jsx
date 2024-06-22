import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me1.png'
import HearderSocials from './HearderSocials'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        <h5>Bienvenue chez</h5>
        <h1>Florian Bouclet</h1>
        <h3 className='text-light'>Société de développement Web</h3>
        <CTA />
        <HearderSocials />

        <div className="me">
          <img src={ME} alt="profil" />
        </div>

        <a href='#contact' className='scroll__down'>Bas de page</a>
      </div>
    </header>
  )
}

export default Header