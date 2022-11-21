import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4f0kufd', 'template_apywy2a', form.current, 'IVuz-Xfi4lw-tIyRu')
      .then((result) => {
          console.log(result.text);
          console.log(result.status);
          if(result.status===200){
            alert("Mail sent Successfully")
          }
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section className='contact section' id="contact">
        <h2 className='section__title'>Get in Touch</h2>
        <span className='section__subtitle'>Contact me</span>

        <div className='contact__container container grid'>
            <div className='contact__content'>
                <h3 className='contact__title'>Talk to me</h3>

                <div className='contact__info'>
                    <div className='contact__card'>
                        <i className='bx bx-mail-send contact__card-icon'></i>

                        <h3 className='contact__card-title'>Email</h3>
                        <span className='contact__card-data'>mugeshkumark22@gmail.com</span>

                        <a href="mailto:mugeshkumark22@gmail.com" className='contact__button'>Write me 
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>
                    
                </div>
            </div>

            <div className='contact__content'>
                <h3 className='contact__title'>Write me your Project</h3>

                <form ref={form} onSubmit={sendEmail} className='contact__form' >
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Name</label>
                        <input type="text" name = "name"
                        className='contact__form-input'
                        placeholder='Enter Your Name'/>
                    </div>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Email</label>
                        <input type="email" name = "email"
                        className='contact__form-input'
                        placeholder='Enter Your Email'/>
                    </div>
                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag'>Description</label>
                        <textarea name="project" cols="30" rows="10"
                        className='contact__form-input'
                        placeholder='Description'></textarea>
                        
                    </div>
                    <button className='button button--flex'>Send Message</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact