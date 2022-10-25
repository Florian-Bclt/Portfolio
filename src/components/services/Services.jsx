import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Ce que j'offre</h5>
      <h2>Mes Services</h2>

      <div className="container services__container">
        <article className="service">
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
              <p>Interface et expérience utilisateur ergonomique et intuitive.</p>
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

        <article className="service">
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

        <article className="service">
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
              <p>Tableau de bord dynamique distinée aux employeurs avec aperçu globale sur les statistiques.</p>
            </li>
          </ul>
        </article>

        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services