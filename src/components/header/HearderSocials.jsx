import React, { useState } from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import images from '../../constants/images'

const HearderSocials = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/florian-bouclet-7200071a7/' target='_blank' rel='noreferrer'><BsLinkedin /></a>
      <a href='https://github.com/Florian-Bclt' target='_blank' rel='noreferrer'><FaGithub /></a>
      <a href='https://www.malt.fr/profile/florianbouclet' target='_blank' rel='noreferrer' 
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        {isHover ? (
          <img src={images.maltVariant} className='social-icon'/>
          ) : (
          <img src={images.malt} className='social-icon'/>
        )}
      </a>
    </div>
  )
}

export default HearderSocials