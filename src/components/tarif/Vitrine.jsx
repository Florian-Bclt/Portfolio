import React from 'react'
import images from '../../constants/images'
import {BsPatchCheckFill, BsPatchMinusFill, BsPatchPlusFill} from 'react-icons/bs'
import './tarif.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Vitrine = () => {
  return (
    <section>
      <div className='container infoTarif__container'>
        <div className="vitrine__info">
          <img src={images.vitrine} alt="site vitrine" />
          <div className="tarif__static__desc">
            <h2>Des sites vitrines adaptés à chaque activité</h2>
            <h4>Votre site vitrine professionnel<br/> à partir de 1000€ HT</h4>
            <p>Entreprise, artisan, association ou profession libérale : je réalise pour vous un site vitrine sur-mesure qui reflète parfaitement votre activité.</p>
            <Link to='/dynamique'><button className='btn btn-primary'>Découvrir les applications dynamiques</button></Link>
          </div>
        </div>
        <div className="options__container">
          <div className="tarif__content">
            <h2>Notre offre comprend</h2>
            <article className='tarif__details'>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Audit personnalisé</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Proposition de design</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Définition du cahier des charges</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Création d'un site monopage (SPA)</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Illustration & icons</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Reponsive mobile & tablette</h4>
              <h4 className='active'><BsPatchCheckFill className='tarif__details-icon'/>Un formulaire de contact</h4>
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

export default Vitrine