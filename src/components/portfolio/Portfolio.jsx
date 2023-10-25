import React, { useState } from 'react'
import {SiReact, SiNestjs, SiGraphql, SiWordpress, SiHtml5, SiCss3, SiJavascript, SiRedux} from 'react-icons/si'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio7.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/dice-roll.png'
import IMG7 from '../../assets/ide.jpg'
import IMG8 from '../../assets/radiuszoom.png'
import images from '../../constants/images'

const Portfolio = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      image: IMG3,
      title: "Quai Antique - Site de restauration",
      demo: 'https://quai-antique.netlify.app/',
      technologies: [
        {name: "ReactJS", icon: images.react},
        {name: "CSS", icon: images.css},
        {name: "Docker", icon: images.docker},
        {name: "NestJS", icon: images.nest},
        {name: "GraphQL", icon: images.graphql},
        {name: "Postgers", icon: images.postgres},
      ],
      showTechnologies: false
    },
    {
      id: 2,
      image: IMG7,
      title: "theSmartIDE - Editeur de code en ligne",
      demo: "https://the-smart-ide.netlify.app/",
      technologies: [
        {name: "ViteJS", icon: images.vite},
        {name: "Redux", icon: images.redux},
        {name: "Tailwind", icon: images.tailwind},
      ],
      showTechnologies: false
    },
    {
      id: 3,
      image: IMG5,
      title: 'Application E-commerce avec panier dynamique',
      demo: 'https://ecommerce-bouclet.netlify.app/',
      technologies: [
        {name: "ViteJS", icon: images.vite},
        {name: "Redux", icon: images.redux},
        {name: "Tailwind", icon: images.tailwind}
      ],
      showTechnologies: false
    },
    {
      id: 4,
      image: IMG2,
      title: "Admin-Fit - Dashboard de gestion d'utilisateurs",
      demo: 'https://adminfit.netlify.app/',
      technologies: [
        {name: "ReactJS", icon: images.react},
        {name: "CSS", icon: images.css},
        {name: "NodeJS", icon: images.node}
      ],
      showTechnologies: false
    },
    {
      id: 5,
      image: IMG4,
      title: 'WeTravel - Agence de voyages',
      demo: 'https://www.florianbouclet.go.yj.fr/',
      technologies: [
        {name: '', icon: ''},
        {name: "WordPress", icon: images.wordpress},
        {name: '', icon: ''},
      ],
      showTechnologies: false
    },
    {
      id: 6,
      image: IMG8,
      title: 'RadiusZoom - Curseur photo au survol',
      demo: 'https://radiuszoom.netlify.app//',
      technologies: [
        {name: "HTML", icon: images.html}, 
        {name: "CSS", icon: images.css},
        {name: "JavaScript", icon: images.js},
      ],
      showTechnologies: false
    },
    {  
      id: 7,
      image: IMG1,
      title: "Music'en Bray - Site associatif d'une école de musique",
      demo: 'https://music-en-bray.netlify.app/',
      technologies: [
        {name: "HTML", icon: images.html}, 
        {name: "", icon: ""}, 
        {name: "Boostrap", icon: images.boostrap}
      ],
      showTechnologies: false
    },
    {
      id: 8,
      image: IMG6,
      title: 'Projet Studi - Mini jeu de dés à partir d\'une maquette',
      demo: 'https://dice-roll-project.netlify.app/',
      technologies: [
        {name: "HTML", icon: images.html}, 
        {name: "CSS", icon: images.css},
        {name: "JavaScript", icon: images.js},
      ],
      showTechnologies: false
    }
  ]);

  const [displayedProjects, setDisplayedProjects] = useState(6);

  const displayedProjectsData = projects.slice(0, displayedProjects);

  function handleTechnologiesClick(projectId) {
    setProjects((prevState) =>
      prevState.map((project) =>
        project.id === projectId
          ? { ...project, showTechnologies: !project.showTechnologies }
          : project
      )
    );
  }

  return (
    <section id='portfolio'>
      <h5>Mes projets</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {displayedProjectsData.map((project) => (
          <article key={project.id} className='portfolio__item'>
            <div className='portfolio__item-image'>
              <img src={project.image} alt={project.title} />
            </div>
            {project.showTechnologies ? (
              <ul className='project__techno'>
                {project.technologies.map((technology) => (
                  <li key={technology.name}>
                    <img  src={technology.icon} alt={technology.name} className='icon'/>
                    {technology.name}
                  </li>
                ))}
              </ul>
            ) : (
              <h3>{project.title}</h3>         
            )}
            <div className='portfolio__item-cta'>
              <button className='btn__techno' onClick={() => handleTechnologiesClick(project.id)}>Technologies</button>
              <a href={project.demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Visiter le site</a> 
            </div>
          </article>
        ))
        }

      </div>
        {projects.length > displayedProjects && (
          <button 
            className="btn__load-more" 
            onClick={() => setDisplayedProjects((prev) => prev + 6)}
          >
            Afficher plus de projets
          </button>
        )}
    </section>
  )
}

export default Portfolio