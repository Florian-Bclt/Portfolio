import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio7.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: IMG3,
    title: "Quai Antique - Site de restauration",
    github: 'https://github.com/Florian-Bclt',
    demo: 'https://quai-antique.netlify.app/'
  },
  {
    id: 2,
    image: IMG4,
    title: 'WeTravel - Agence de voyages',
    github: 'https://github.com',
    demo: 'https://www.florianbouclet.go.yj.fr/'
  },
  {
    id: 3,
    image: IMG2,
    title: "Admin-Fit - Dashboard de gestion d'utilisateurs",
    github: 'https://github.com/Florian-Bclt',
    demo: 'https://adminfit.netlify.app/'
  },
  {  
    id: 4,
    image: IMG1,
    title: "Music'en Bray - Site associatif d'une école de musique",
    github: 'https://github.com/Florian-Bclt',
    demo: 'https://music-en-bray.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Projet entrainement e-commerce en réalisation avec VueJS',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
  {
    id: 6,
    image: IMG6,
    title: 'Crypto Currency Dashboard & Financial Visualization',
    github: 'https://github.com',
    demo: 'https://dribbble.com/shots/16673715-Crypto-currency-dashboards-and-financial-data-visualization'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Mes projets</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>            
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio