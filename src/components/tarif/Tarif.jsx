import React from 'react'
import './tarif.css'
import {BsPatchCheckFill, BsPatchMinusFill, BsPatchPlusFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Tarif = () => {
  return (
    <section id='tarifs'>
      <h5 data-aos="fade-in">Mes prestations</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">Choisissez l'offre qui vous convient</h2>

      <div className="container tarif__container">
        <div className="tarif__static" data-aos="zoom-in-right">
          <h2>Site vitrine</h2>
          <div className="price">
            <h1>1000€ H.T<span>*</span></h1>
          </div>          
          <div className="tarif__content">
            <article className='tarif__details'>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Audit personnalisé</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Proposition de design</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Définition du cahier des charges</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Création d'un site monopage (SPA)</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Illustration & icons</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Reponsive mobile & tablette</h4>
            </article>
          </div>
        </div>

        <div className="tarif__fullstack" data-aos="zoom-in-left">
          <h2>Application complète</h2>
          <div className="price">
            <h6>à partir de</h6>
            <h1>1500€ H.T<span>*</span></h1>
          </div>
            <div className="tarif__content">
            
            <article className='tarif__details'>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Audit personnalisé</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Proposition de design</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Définition du cahier des charges</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Création d'un site monopage (SPA)</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Illustration & icons</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Reponsive mobile & tablette</h4>
              <h5>Les plus :</h5>
              <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Possibilité d'utilisation d'un CMS</h4>
              <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Optisation SEO avancée</h4>
              <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Application e-commerce, e-learning</h4>
              <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Espace personnel</h4>
              <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Gestion de données</h4>
              <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Modification autonome</h4>
            </article>
            </div>
          </div>
      </div>
      <h5 className='info'>*Estimation de prix, évolutif en fonction du projet</h5>
    </section>
  )
}

export default Tarif