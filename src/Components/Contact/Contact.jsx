import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./contact.css";
import { useFormik } from 'formik';
import Swal from 'sweetalert2';


function Contact() {
    const form = useRef();
    const formik = useFormik({
        initialValues: {
       
          name: "",
          email: "",
          number: "",
          project: "",
        
          
        },
        validate: (values)=>{
          let errors = {};
          if (values.name === "") {
            errors.name = "Please Enter Name"
          }
          if (values.email === "") {
            errors.email = "Please Enter Email"
          }
          if (values.number === "") {
            errors.number = "Please Enter Mobile Number"
          }
          if (values.project === "") {
            errors.project = "Please Enter Content"
          }
         
          return errors;
          
        },
    onSubmit:  (values, {resetForm}) => {
            console.log(values);
            emailjs.sendForm('service_4f0kufd', 'template_apywy2a', form.current, 'IVuz-Xfi4lw-tIyRu')
      .then((result) => {
          console.log(result.text);
          console.log(result.status);
          if(result.status===200){
            Swal.fire({ title: 'Mail Sent Successful', icon: 'success', confirmButtonText: 'Okay'});
          }
      }, (error) => {
          console.log(error.text);
      });
   resetForm({values:""})
      }
         })
    
    
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

                        <a href="mailto:mugeshkumark22@gmail.com" className='contact__button' target="_blank">Write me 
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>
                    <div className='contact__card'>
                        <i className='bx bxl-linkedin-square contact__card-icon'></i>
                       

                        <h3 className='contact__card-title'>LinkedIn</h3>
                        <span className='contact__card-data'>Mugesh Kumar</span>

                        <a href="https://www.linkedin.com/in/mugesh-kumar-4344a9156" className='contact__button' target="_blank">Connect me 
                        <i className='bx bx-right-arrow-alt contact__button-icon'></i></a>
                    </div>
                    
                </div>
            </div>

            <div className='contact__content'>
                <h3 className='contact__title'>Write me </h3>

                <form onSubmit={formik.handleSubmit}  ref={form}  className='contact__form' >
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Name</label>
                        <input type={"text"} name = "name"
                        className='contact__form-input'
                        placeholder='Enter Your Name' required
                        value={formik.values.name} onChange={formik.handleChange}/>
                       
                    </div>
                    <div className="span__error">
                        <span  style={{color:'orange'}}>{formik.errors.name}</span>
                        </div>
                    
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Email</label>
                        <input type={"email"} name = "email"
                        className='contact__form-input'
                        placeholder='Enter Your Email' required
                        value={formik.values.email} onChange={formik.handleChange}/>
                        
                    </div>
                    <div className="span__error">
                        <span  style={{color:'orange'}}>{formik.errors.email}</span>
                        </div>
                    <div className='contact__form-div'>
                        <label className='contact__form-tag'>Mobile No</label>
                        <input type={"tel"} name = "number"
                        className='contact__form-input'
                        placeholder='Enter Your Mobile No'
                         required
                        value={formik.values.number} onChange={formik.handleChange}/>
                    </div>
                    <div className="span__error">
                        <span  style={{color:'orange'}}>{formik.errors.number}</span>
                        </div>
                    <div className='contact__form-div contact__form-area'>
                        <label className='contact__form-tag'>Description</label>
                        <textarea name="project" cols="30" rows="10"
                        className='contact__form-input'
                        placeholder='Description' required
                        value={formik.values.project} onChange={formik.handleChange}></textarea>
                        
                        
                    </div>
                    <div className="span__error">
                        <span  style={{color:'orange'}}>{formik.errors.project}</span>
                        </div>
                    <button className='button button--flex' type={"submit"} value="Submit" disabled={!formik.isValid}>Send Message</button>
                </form>
            </div>

        </div>
    </section>
  )
}

export default Contact