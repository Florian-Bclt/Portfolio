import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import HearderSocials from './HearderSocials'

const Header = () => {
  return (
    <Header>
      <div className="container header__container">
        <h5>Bonjour je suis</h5>
        <h1>Florian Bouclet</h1>
        <h5 className='text-light'>Développeur Web - Frontend</h5>
        <CTA />
        <HearderSocials />

        <div className="me">
          <img src={ME} alt="Photo de profil" />
        </div>

        <a href='#contact' className='scroll__down'>Bas de page</a>
      </div>
    </Header>
  )
}

export default Header