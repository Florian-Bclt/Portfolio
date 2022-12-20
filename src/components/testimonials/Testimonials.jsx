import React from 'react'
import './testimonials.css'
import AVATAR1 from '../../assets/avatar1.jpg'
import AVATAR2 from '../../assets/avatar2.jpg'
import AVATAR3 from '../../assets/avatar3.jpg'
import AVATAR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


  const data = [
    {
      avatar: AVATAR1,
      name: 'Vicky H.',
      review: "Professionnel sérieux et qui s'adapte aux besoins du client. Les designs proposés sont modernes, épurés et le choix des couleurs est agréable pour les yeux. Je recommande Florian pour sa rigueur et son écoute par rapport aux contraintes des métiers.",
    },
    {
      avatar: AVATAR2,
      name: 'Stefan S.',
      review: "Si je devais décrire Florian en un mot ? L'écoute ! Lors des nos entretiens il m'a expliqué qu'il était infirmier et ça se ressent dans son travail. Il est rigoureux et sait répondre aux besoins de ses clients en proposant des outils modernes. Je vous le recommande !",
    },
    {
      avatar: AVATAR3,
      name: 'Josh K.',
      review: "Très satisfait ! Travail soigné et rapide. Il m'a présenté plusieurs types de projets qui pourraient répondre à ce que je recherchais. Je n'ai pas le temps de me plonger dans l'informatique et il a su me livrer une application de gestion rapide et intuitive.",
    },
    {
      avatar: AVATAR4,
      name: 'Stephanie L.',
      review: "C'est vraiment un plaisir de travailler avec Florian. En plus d'être un bon professionnel, il est souriant et disponible. Ca fait fait du bien de voir qu'il y a encore des gens agréables dans le monde actuel. Je recommande ses services les yeux fermés.",
    },
  ]

const Testimonials = () => {

  return (
    <section id='testimonials'>
      <h5>Avis des clients</h5>
      <h2>Témoignages</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className='testimonial'>
              <div className="client__avatar">
                <img src={avatar} alt="Avatar One" />
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials