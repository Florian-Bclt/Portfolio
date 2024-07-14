import React from 'react'
import './tarif.css'
import {BsPatchCheckFill, BsPatchMinusFill, BsPatchPlusFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'
import images from '../../constants/images';
import { Link } from 'react-router-dom';

AOS.init();

const Tarif = () => {
  return (
    <section id='tarifs'>
      <h5 data-aos="fade-in">Mes prestations</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">Choisissez l'offre qui vous convient</h2>

      <div className="container tarif__container">
        <div className="tarif__static" data-aos="zoom-in">
          <img src={images.vitrine} alt="site vitrine" />
          <div className="tarif__static__desc">
            <h2>Création de site vitrine</h2>
            <p>Plus qu'une simple présence sur le web, une vitrine de votre entreprise, de votre savoir-faire. Un site professionnel pour vous démarquer et rayonner sur internet.</p>
            <Link to='/vitrine'><button className='btn btn-primary'>Nos tarifs</button></Link>
          </div>         
        </div>
        <div className="tarif__static" data-aos="zoom">
          <img src={images.dynamique} alt="application complète" />
          <div className="tarif__static__desc">
            <h2>Application dynamique</h2>
            <p>Transformez votre présence en ligne avec un site personnalisable, interactif et engageant, conçu pour attirer et fidéliser vos clients !</p>
            <Link to='/dynamique'><button className='btn btn-primary'>Nos tarifs</button></Link>
          </div>         
        </div>
        <div className="tarif__static" data-aos="zoom">
          <img src={images.maintenance} alt="service de maintenance" />
          <div className="tarif__static__desc">
            <h2>Maintenance</h2>
            <p>Assurez le bon fonctionnement et la sécurité de votre site en continu avec notre service de maintenance, pour une tranquillité d'esprit garantie !</p>
            <Link to='/maintenance'><button className='btn btn-primary'>Nos tarifs</button></Link>
          </div>         
        </div>
        <div className="tarif__static" data-aos="zoom">
          <img src={images.dev} alt="service de webmaster" />
          <div className="tarif__static__desc">
            <h2>Webmaster</h2>
            <p>Profitez de l'expertise d'un webmaster dédié avec notre abonnement, pour une gestion et une optimisation quotidienne de votre site !</p>
            <Link to='/webmaster'><button className='btn btn-primary'>Nos tarifs</button></Link>
          </div>         
        </div>
      </div>
    </section>
  )
}

export default Tarif