import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  const location = useLocation();

  // Vérifie sur quelle page on se trouve puis renvoi à la section demandée
  const handleNavClick = (hash) => {
   if (location.pathname === '/') {
      const element = document.getElementById(hash.slice(1));
      if (element) {
         element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      setActiveNav(hash);
   } else {
      setActiveNav(hash);
   }
  }

  return (
    <nav>
      <Link to='/#header' 
         onClick={() => handleNavClick('#header')} 
         className={activeNav === '#' ? 'active' : ''}>
         <AiOutlineHome/>
      </Link >
      
      <Link to='/#about'
         onClick={() => handleNavClick('#about')}
         className={activeNav === '#about' ? 'active' : ''}>
         <AiOutlineUser/>
      </Link>

      <Link to='/#services'
         onClick={() => handleNavClick('#services')}
         className={activeNav === '#services' ? 'active' : ''}>
         <RiServiceLine/>
      </Link>

      <Link to='/#tarifs'
         onClick={() => handleNavClick('#tarifs')}
         className={activeNav === '#tarifs' ? 'active' : ''}>
         <BiBook/>
      </Link>

      <Link to='/#contact' 
         onClick={() => handleNavClick('#contact')} 
         className={activeNav === '#contact' ? 'active' : ''}>
         <BiMessageSquareDetail/>
      </Link>
    </nav>
  )
}

export default Nav