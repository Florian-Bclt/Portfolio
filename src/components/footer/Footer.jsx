import React, { useState } from 'react'
import './footer.css'
import { FaFacebook, FaGithub} from 'react-icons/fa'
import { BsLinkedin } from 'react-icons/bs'
import LOGO from '../../assets/logo.png'
import LegalNotice from '../LegalNotice/LegalNotice'
import images from '../../constants/images'
import { Link } from 'react-router-dom'

const Footer = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLegalNoticeClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  const [isHover, setIsHover] = useState(false);

  return (
    <footer data-aos="fade-in">
      <a href="#" className='footer__logo'>Société Florian Bouclet</a>

      <ul className='permalinks'>
        <li><a href="#header">Accueil</a></li>
        <li><a href="#about">A propos de moi</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#tarifs">Mes prestations</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <Link to="https://www.facebook.com/florian.bouclet.3" target='_blank' rel='noreferrer'><FaFacebook/></Link>
        <Link to='https://github.com/Florian-Bclt' target='_blank' rel='noreferrer'><FaGithub /></Link>
        <Link to="https://www.linkedin.com/in/florian-bouclet-7200071a7/" target='_blank' rel='noreferrer'><BsLinkedin /></Link>
        <Link to='https://www.malt.fr/profile/florianbouclet' target='_blank' rel='noreferrer' 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <img src={images.maltBlack} className='social-icon'/>
          ) : (
          <img src={images.maltVariant} className='social-icon'/>
        )}
      </Link>
      </div>

      <div className="footer__copyright">
        <small>&copy; Bouclet Florian - Tous droits réservés - <a href='#header' onClick={handleLegalNoticeClick} >Mentions légales</a> - <Link to="/cgv">CGV</Link></small>
      </div>

      {isModalOpen && (
        <div className="modal">
          <span className="close" onClick={() => setIsModalOpen(false)}>&times;</span>
          <div className="modal-content">
            <LegalNotice />
          </div>
        </div>
      )}
    </footer>

  )
}

export default Footer