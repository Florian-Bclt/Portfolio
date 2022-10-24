import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HearderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/florian-bouclet-7200071a7/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/Florian-Bclt' target='_blank' rel='noreferrer'><FaGithub /></a>
      <a href='https://dribbble.com/Dwalum' target='_blank' rel='noreferrer'><FiDribbble /></a>
    </div>
  )
}

export default HearderSocials