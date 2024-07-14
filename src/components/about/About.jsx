import React from 'react'
import './about.css'
import LOGO from '../../assets/logo.png'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const About = () => {

  return (
    <section id='about'>
      <h5 data-aos="fade-in">Faire Connaissance</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">A propos de moi</h2>

      <div className="container about__container">
        <div className="about__me" data-aos="zoom-in">
          <div className="about__me-image" >
            <img src={LOGO} alt='logo'/>
          </div>
        </div>
        <div className="about__content">
          <p data-aos="fade-up" data-aos-duration="3000" >
            Spécialisé dans la création d'espace personnel, je porte toute mon attention sur l'<b>expérience utilisateur</b> en développant des sites fonctionnels, responsive, multiplateforme et dynamique !
          </p>
          <p data-aos="fade-up" data-aos-duration="3000" >
           Issu d'une reconversion professionnel, j'ai commencé ma vie active par 10 ans d'expérience en tant qu'infirmier. Aujourd'hui
           c'est avec la même rigueur que j'écoute et adapte <b>mes Services</b> à <b>vos besoins</b>. Tout comme les humains, un site a besoin d'être soigné. <br/><br />
            Création, mise à jour d'application web, ajout de fonctionnalité ? <br />
            <b>Vous êtes au bon endroit !</b>
          </p>

          <a href='#contact'className='btn btn-primary' data-aos="zoom-in" data-delay="3000">Parlons-en !</a>
        </div>
      </div>
    </section>
  )
}

export default About
