import React, {useRef, useState} from 'react'
import './contact.css'
import {MdOpacity, MdOutlineEmail}from 'react-icons/md'
import {RiMessengerLine}from 'react-icons/ri'
import {BsWhatsapp}from 'react-icons/bs'
import emailjs from 'emailjs-com'
import AOS from 'aos';
import 'aos/dist/aos.css'

AOS.init();

const Contact = () => {
  const form = useRef();
  const [validationMessage, setValidationMessage] = useState('');
  const [validationColor, setValidationColor] = useState('');

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm('service_08k76hg', 'template_vi8jqxi', form.current, 'c9BlF0wItDrqYhC8l');

      if (result) {
        setValidationMessage('Succès ! Message envoyé.');
        setValidationColor('#27ae60');
      } else {
        setValidationMessage('Erreur ! As-tu bien rempli chacun des champs ?');
        setValidationColor('#8a1212')
      }
    } catch (error) {
      console.error('Erreur lors de l\'envoi du formulaire : ', error);
      setValidationMessage('Erreur ! As-tu bien rempli chacun des champs ?');
      setValidationColor('#8a1212');    
    }

    // Réinitialiser le formulaire
    e.target.reset();
  };


  return (
    <section id='contact'>
      <h5 data-aos="fade-in">Recontrons-nous !</h5>
      <h2 data-aos="fade-in" data-aos-duration="3000">Contact</h2>

      <div className="container contact__container">
        <div className="contact__options" >
          <article className='contact__option'data-aos="zoom-in">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='text-light'>bouclet.florian@gmail.com</h5>
            <a href="mailto:bouclet.florian@gmail.com" target='_blank'>Envoyer un message</a>
          </article>

          <article className='contact__option' data-aos="zoom-in" data-aos-delay="200">
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5 className='text-light'>Bouclet Florian</h5>
            <a href="https://m.me/florian.bouclet.3" target='_blank'>Envoyer un message</a>
          </article>

          <article className='contact__option' data-aos="zoom-in" data-aos-delay="400">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+33685992504</h5>
            <a href="https://api.whatsapp.com/send?phone=+33685992504">Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom et prénom' required data-aos='zoom-in' data-aos-delay="300"/>
          <input type="email" name="email" placeholder='Votre Email' required data-aos='zoom-in' data-aos-delay="500" />
          <textarea name="message" rows="7" placeholder='Votre message' required data-aos='zoom-in' data-aos-delay="700"></textarea>
          <button type='submit' className='btn btn-primary' data-aos='zoom-in' data-aos-delay="900">Envoyer</button>
            {/* Affichage du message de validation */}
            {validationMessage && (
              <div style={{ 
                color: validationColor, 
                padding: '2px',
                display: 'flex',
                justifyContent: 'center',
                textAlign: 'center',
                borderRadius: '10px',
                }}>
                {validationMessage}
              </div>
            )}
        </form>

      </div>
    </section>
  )
}

export default Contact