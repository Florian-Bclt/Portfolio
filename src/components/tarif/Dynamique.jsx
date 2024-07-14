import React from 'react'
import images from '../../constants/images'
import {BsPatchCheckFill, BsPatchMinusFill, BsPatchPlusFill} from 'react-icons/bs'
import './tarif.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Dynamique = () => {
  return (
    <section>
      <div className='container infoTarif__container'>
        <div className="vitrine__info">
          <img src={images.dynamique} alt="application dynamique" />
          <div className="tarif__static__desc">
            <h2>Des sites dynamiques personnalisables</h2>
            <h4>Votre application complète<br/> à partir de 1500€ HT</h4>
            <p>Un site dynamique vous permet de gérer facilement et en toute autonomie le contenu de votre site grâce à un espace administrateur intuitif. Vous pouvez ajouter, modifier ou supprimer des pages, articles, images et bien plus encore, sans avoir besoin de compétences techniques. Cette flexibilité vous permet de garder votre site toujours à jour et pertinent pour vos visiteurs.</p>
            <Link to='/vitrine'><button className='btn btn-primary'>Découvrir les sites vitrines</button></Link>
          </div>
        </div>
        <div className="options__container">
          <div className="tarif__content">
            <h2>Notre offre comprend</h2>
              <article className='tarif__details'>
                  <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Audit personnalisé</h4>
                  <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Proposition de design</h4>
                  <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Adapté PC, mobile & tablette</h4>
                  <h5>Les plus :</h5>
                  <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Optimisation SEO avancée</h4>
                  <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Espace personnel administrateur</h4>
                  <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Gestion et sécurité des données</h4>
                  <h4 className='prenium'><BsPatchPlusFill className='tarif__details-icon'/>Modification autonome</h4>
                </article>
          </div>
          <div className="maintenance">
            <Link to='/maintenance'>
            <div className="options__content">
              <h2>Maintenance</h2>
              <span />
              <p>Dès 30€ HT / mois</p>
            </div>
            </Link>
          </div>
          <div className="development">
            <Link to='/webmaster'>
            <div className="options__content">
              <h2>Webmaster</h2>
              <span />
              <p>Dès 20€ HT / mois</p>
            </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Dynamique