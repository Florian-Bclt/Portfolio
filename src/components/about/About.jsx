import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Faire Connaissance</h5>
      <h2>A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME}/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3 ans de travail</small>
            </article>
            <article className="about__card">
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>5+ clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about_icon'/>
              <h5>Projets</h5>
              <small>10+ réalisés</small>
            </article>
          </div>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde quis in neque, perferendis aut, consectetur iste delectus inventore ullam possimus eligendi adipisci voluptatum repudiandae beatae veniam rerum, nisi enim nihil.
          </p>

          <a href='#contact'className='btn btn-primary'>En savoir +</a>
        </div>
      </div>
    </section>
  )
}

export default About