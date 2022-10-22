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
      name: 'Tina Snow',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel aperiam expedita quo necessitatibus dicta, voluptatibus quas quos asperiores odio iure laudantium laboriosam, omnis culpa soluta? In aliquid tempora laboriosam.',
    },
    {
      avatar: AVATAR2,
      name: 'Shatta Wale',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel aperiam expedita quo necessitatibus dicta, voluptatibus quas quos asperiores odio iure laudantium laboriosam, omnis culpa soluta? In aliquid tempora laboriosam.',
    },
    {
      avatar: AVATAR3,
      name: 'Kwame Despite',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel aperiam expedita quo necessitatibus dicta, voluptatibus quas quos asperiores odio iure laudantium laboriosam, omnis culpa soluta? In aliquid tempora laboriosam.',
    },
    {
      avatar: AVATAR4,
      name: 'Nana Ama McBrown',
      review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias vel aperiam expedita quo necessitatibus dicta, voluptatibus quas quos asperiores odio iure laudantium laboriosam, omnis culpa soluta? In aliquid tempora laboriosam.',
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