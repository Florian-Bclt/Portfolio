import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {fiDribbble} from 'react-icons/fi'

const HearderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
      <a href='https://github.com' target='_blank'><FaGithub /></a>
      <a href='https://dribbble.com' target='_blank'><fiDribbble /></a>
    </div>
  )
}

export default HearderSocials