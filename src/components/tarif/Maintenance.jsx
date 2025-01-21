import React from 'react'
import images from '../../constants/images'
import {BsPatchCheckFill, BsPatchMinusFill, BsPatchPlusFill} from 'react-icons/bs'
import './tarif.css'
import { Link } from 'react-router-dom'
import Footer from '../footer/Footer'

const Maintenance = () => {
  return (
    <section>
      <div className='container infoTarif__container'>
        <div className="vitrine__info">
          <img src={images.maintenance} alt="application dynamique" />
          <div className="tarif__static__desc">
            <h2>Maintenance</h2>
            <h4>Site vitrine : 30€ HT/mois<br/>Site dynamique :  dès 45€ HT/mois</h4>
            <p>Mon service de maintenance comprend des mises à jour régulières, la correction rapide des bugs et l'intégration des dernières évolutions technologiques. Je veille à ce que votre site soit toujours sécurisé, performant et conforme aux nouvelles normes, y compris le respect de la loi RGPD et des recommandations de la CNIL. Confiez-moi la maintenance de votre site et concentrez-vous sur le développement de votre activité, en sachant que votre présence en ligne est entre de bonnes mains.</p>
            <div className="tarif__navigation">
              <Link to='/webmaster'><button className='btn btn-primary'>En savoir plus sur le service Webmaster</button></Link>
              <Link to='/'><button className='btn btn-variant'>Revenir à l'accueil</button></Link>
            </div>
          </div>
        </div>

      </div>
      <Footer />
    </section>
  )
}

export default Maintenance