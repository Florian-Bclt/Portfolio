import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'

const HearderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/florian-bouclet-7200071a7/'target='_blank'><BsLinkedin /></a>
      <a href='https://github.com/Florian-Bclt' target='_blank'><FaGithub /></a>
      <a href='https://dribbble.com/Dwalum' target='_blank'><FiDribbble /></a>
    </div>
  )
}

export default HearderSocials