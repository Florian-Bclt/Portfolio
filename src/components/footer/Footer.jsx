import React from 'react'
import './footer.css'
import { FaFacebook, FaGithub} from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import {FiDribbble} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer data-aos="fade-in">
      <a href="#" className='footer__logo'>Bouclet Florian - Développeur web</a>

      <ul className='permalinks'>
        <li><a href="#">Accueil</a></li>
        <li><a href="#about">A propos de moi</a></li>
        <li><a href="#experience">Mon expérience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/florian.bouclet.3" target='_blank' rel='noreferrer'><FaFacebook/></a>
        <a href='https://github.com/Florian-Bclt' target='_blank' rel='noreferrer'><FaGithub /></a>
        <a href="https://www.linkedin.com/in/florian-bouclet-7200071a7/" target='_blank' rel='noreferrer'><BsLinkedin /></a>
        <a href='https://dribbble.com/Dwalum' target='_blank' rel='noreferrer'><FiDribbble /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bouclet Florian - Portfolio.</small>
      </div>
    </footer>

  )
}

export default Footer