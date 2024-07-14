import React from 'react'
import images from '../../constants/images'
import './tarif.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Webmaster = () => {
  return (
    <section>
      <div className='container infoTarif__container'>
        <div className="vitrine__info">
          <img src={images.dev} alt="application dynamique" />
          <div className="tarif__static__desc">
            <h2>Webmaster</h2>
            <h4>Site vitrine : 20€ HT/mois<br/> Site dynamique : dès 40€ HT/mois</h4>
            <p>Le service de webmaster vous offre une gestion complète de votre site, incluant la rédaction de contenus de qualité, l'ajout d'offres promotionnelles, la mise à jour d'événements et bien plus encore. Vous n'avez plus à vous soucier de l'entretien de votre site : je m'occupe de tout pour que vous puissiez vous concentrer sur votre activité principale. Assurez-vous que votre site reste toujours pertinent, attractif et à jour pour vos visiteurs.</p>
            <div className="tarif__navigation">
              <Link to='/maintenance'><button className='btn btn-primary'>En savoir plus sur la maintenance</button></Link>
              <Link to='/'><button className='btn btn-variant'>Revenir à l'accueil</button></Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  )
}

export default Webmaster