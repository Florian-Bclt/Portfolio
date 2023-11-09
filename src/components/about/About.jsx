import React from 'react'
import './about.css'
import ME from '../../assets/me-about1.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const About = () => {
  const calculateExperience = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 2019;
    return currentYear - startYear;
  }

  return (
    <section id='about'>
      <h5 data-aos="fade-in">Faire Connaissance</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="zoom-in">
          <div className="about__me-image" >
            <img src={ME} alt='profil'/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article
              className="about__card" 
              data-aos="flip-up" 
              data-aos-delay="800"
              data-aos-duration="1200"
            >
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>{calculateExperience()} ans de pratique</small>
            </article>
            <article
              className="about__card" 
              data-aos="flip-up" 
              data-aos-delay="1000"
              data-aos-duration="1200"
            >
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>5+ clients</small>
            </article>
            <article
              className="about__card" 
              data-aos="flip-up" 
              data-aos-delay="1200"
              data-aos-duration="1200"
            >
              <VscFolderLibrary className='about_icon'/>
              <h5>Projets</h5>
              <small>10+ réalisés</small>
            </article>
          </div>

          <p data-aos="fade-up" data-aos-duration="3000" >
            Spécialisé en développement frontend, c'est avec rigueur et enthousiasme que je vous accompagnerai dans vos projets
            personnels selon vos besoins et vos attentes. <br />
            Création ou mise à jour d'application web ? <br />
            <b>Vous êtes au bon endroit !</b>
          </p>

          <a href='#contact'className='btn btn-primary' data-aos="zoom-in" data-delay="3000">Parlons-en !</a>
        </div>
      </div>
    </section>
  )
}

export default About
