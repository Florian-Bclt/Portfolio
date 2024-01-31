import React, { useState } from 'react'
import './services.css'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Services = () => {
    // État pour suivre quel élément de l'accordéon est actuellement ouvert
    const [openItemId, setOpenItemId] = useState(null);

    // Fonction pour gérer l'ouverture/fermeture des éléments de l'accordéon
    const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id); // Ferme l'élément si déjà ouvert 
    };

    const isItemOpen = (id) => openItemId === id;

  return (
    <section id='services'>
      <h5 data-aos="fade-in">Ce que j'offre</h5>
      <h2 data-aos="fade-in" data-aos-duration="2000">Mes Services</h2>

      <div className="services__containers">
        {/* section CTA */}
        <div className="services__container" data-aos="zoom-in-right" data-aos-duration="2000">
          <h1>Découvrez le processus unique de collaboration avec votre expert ReactJS</h1>
          <div className='services__container-cta'>
            <h2 data-aos="zoom-in" data-aos-duration="4000">Prêt à transformer vos projets en réalité ?</h2>
            <h3 data-aos="zoom-in" data-aos-duration="3000">Commencez dès aujourd'hui avec une consultation <span>Gratuite</span> !
          </h3>
            <a href='#contact'className='btn btn-primary' data-aos="zoom-in" data-delay="3000">Me Contacter !</a>
          </div>
        </div>

        {/* section menu accordéon */}

        <div className="services__container" data-aos="zoom-in-left" data-aos-duration="3000">
        <div className="services__list">
          <h2 onClick={() => toggleItem(1)}>
            Évaluation et Consultation Initiale
            {isItemOpen(1) ? <BiChevronUp/> : <BiChevronDown />}
          </h2>
          {isItemOpen(1) && <p data-aos='fade-in' data-aos-duration="2000">Commencez votre voyage numérique avec une consultation approfondie où nous discuterons de vos visions et exigences. En tant que spécialiste ReactJS, je vous aide à clarifier vos besoins et à définir une stratégie claire pour votre projet.</p>}
        </div>
        <div className="services__list">
          <h2 onClick={() => toggleItem(2)}>
            Planification et Stratégie de Développement
            {isItemOpen(2) ? <BiChevronUp /> : <BiChevronDown />}
          </h2>
          {isItemOpen(2) && <p data-aos='fade-in' data-aos-duration="2000">Chaque projet est unique, donc je crée un plan sur mesure qui aligne vos objectifs commerciaux avec des solutions technologiques innovantes. Vous serez impliqué à chaque étape, garantissant que le projet reste sur la bonne voie et répond à vos attentes.</p>}
        </div>
        <div className="services__list">
          <h2 onClick={() => toggleItem(3)}>
            Développement et Exécution
            {isItemOpen(3) ? <BiChevronUp /> : <BiChevronDown />}
          </h2>
          {isItemOpen(3) && <p data-aos='fade-in' data-aos-duration="2000">A cette étape je transforme la stratégie en action. Vous pouvez vous attendre à une exécution agile et transparente avec des mises à jour régulières, garantissant que le produit final est non seulement fonctionnel mais aussi hautement performant.</p>}
        </div>
        <div className="services__list">
          <h2 onClick={() => toggleItem(4)}>
            Support et Évolution
            {isItemOpen(4) ? <BiChevronUp /> : <BiChevronDown />}
          </h2>
          {isItemOpen(4) && <p data-aos='fade-in' data-aos-duration="2000">Ma relation avec vous ne s'arrête pas après la livraison du projet. Je propose un support continu et des services de maintenance pour assurer la pérennité et l'évolution de votre solution Web, vous permettant de rester compétitif et à jour.</p>}
        </div>
      </div>
    </div>




    </section>
  )
}

export default Services