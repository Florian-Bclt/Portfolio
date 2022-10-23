import React, {useRef} from 'react'
import './contact.css'
import {MdOutlineEmail}from 'react-icons/md'
import {RiMessengerLine}from 'react-icons/ri'
import {BsWhatsapp}from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_15spssq', 'template_5xn4kar', form.current, 'OXe1BccbCa-DlLyTl')

    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Recontrons-nous !</h5>
      <h2>Contact</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5 className='text-light'>bouclet.florian@hotmail.com</h5>
            <a href="mailto:bouclet.florian@hotmail.com" target='_blank'>Envoyer un message</a>
          </article>

          <article className='contact__option'>
            <RiMessengerLine className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5 className='text-light'>Bouclet Florian</h5>
            <a href="https://m.me/florian.bouclet.3" target='_blank'>Envoyer un message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5 className='text-light'>+33685992504</h5>
            <a href="https://api.whatsapp.com/send?phone=+33685992504">Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Votre nom et prénom' required />
          <input type="email" name="email" placeholder='Votre Email' required/>
          <textarea name="message" rows="7" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>
    </section>
  )
}

export default Contact