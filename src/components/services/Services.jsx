import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Services = () => {
  return (
    <section id='services'>
      <h5 data-aos="fade-in">Ce que j'offre</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">Mes Services</h2>

      <div className="container services__container">
        <article className="service" data-aos="fade-in" data-aos-duration="3000">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Création de maquette personnalisée avec Abobe XD et Figma.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Interface utilisateur ergonomique et intuitive.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Optimisation du design en respectant la qualité du contenu.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Respect des éléments habituels pour facilier l'UX.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Responsive design avec une approche mobile first.</p>
            </li>
          </ul>
        </article>

        {/* END OF UI/UX */}

        <article className="service" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="500">
          <div className="service__head">
            <h3>Développement Web</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Intégration web de la maquette réalisée au préalable avec vous.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Réalisation de site dynamique et sécurisé.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Création de site vitrine.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Création d'API backend en lien avec une base de données.</p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Référencement naturel (SEO) pour améliorer la visibilité sur internet.</p>
            </li>
          </ul>
        </article>

        {/* END OF WEB DEVELOPMENT */}

        <article className="service" data-aos="fade-in" data-aos-duration="3000" data-aos-delay="1000">
          <div className="service__head">
            <h3>Création de contenu</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Blog dynamique et personnalisable avec interface de gestion :
                <p>Gestion des droits des utilisateurs</p>
                <p>Plateforme e-commerce</p>
                <p>Galerie photo</p>
              </p>
            </li>
            <li>
              <BiCheck className='service__list_icon'/>
              <p>Tableau de bord dynamique distinée aux administrateurs avec aperçu globale sur les statistiques.</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services