import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Experience = () => {
  return (
    <section id='experience'>
      <h5 data-aos="fade-in">Mes atouts</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">Mon Expérience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" data-aos="zoom-in-right">
          <h3>Développement Frontend</h3>
          <div className="experience__content">
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>React JS</h4>
                <small className='text-light'>Expérimenté</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Redux</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>

            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>BOOTSTRAP</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details-icon'/>
              <div>
                <h4>Tailwind CSS</h4>
                <small className='text-light'>Intermédiaire</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__backend" data-aos="zoom-in-left">
          <h3>Développement Backend</h3>
            <div className="experience__content">
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Node JS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Nest JS</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>API REST</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>API GraphQl</h4>
                  <small className='text-light'>Intermédiaire</small>
                </div>
              </article>

              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>MySQL</h4>
                  <small className='text-light'>Débutant</small>
                </div>
              </article>
              <article className='experience__details'>
                <BsPatchCheckFill className='experience__details-icon'/>
                <div>
                  <h4>Mongo DB</h4>
                  <small className='text-light'>Débutant</small>
                </div>
              </article>            
            </div>
          </div>
      </div>
    </section>
  )
}

export default Experience