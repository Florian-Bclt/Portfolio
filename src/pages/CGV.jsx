import { useState } from 'react'
import './CGV.css'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import AOS from 'aos';
import 'aos/dist/aos.css'
import cgvData from '../constants/cgv.json'

AOS.init();

function CGV() {
      // État pour suivre quel élément de l'accordéon est actuellement ouvert
      const [openItemId, setOpenItemId] = useState(null);

      // Fonction pour gérer l'ouverture/fermeture des éléments de l'accordéon
      const toggleItem = (id) => {
        setOpenItemId(openItemId === id ? null : id); // Ferme l'élément si déjà ouvert 
      };

      const isItemOpen = (id) => openItemId === id;

  return (
    <section className='cgv'>
      <h1>Conditions générales de vente</h1>
      <div className="container cgv__container" data-aos="zoom-in-left" data-aos-duration="3000">
        {cgvData.map((item) => (
            <div className="cgv__list" key={item.id}>
                <h2 onClick={() => toggleItem(item.id)}>
                    {item.title}
                    {isItemOpen(item.id) ? <BiChevronUp /> : <BiChevronDown />}
                </h2>
                {isItemOpen(item.id) && 
                  <p data-aos='fade-in' data-aos-duration="2000">
                    {item.content.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </p>
                }
            </div>
        ))}
        
      </div>
    </section>
  )
}

export default CGV