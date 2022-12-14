import React from 'react';
import "./footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer__container container'>
            <h1 className='footer__title'>Mugesh Kumar K</h1>
            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>
                    About
                    </a>
                    </li>
                    <li>
                    <a href="#portfolio" className='footer__link'>
                    Portfolio    
                    </a>
                    </li>
                    <li>
                    <a href="#home" className='footer__link'>
                       Home 
                    </a>
                </li>
            </ul>
            <div className='footer__social'>
            <a href="https://www.linkedin.com/in/mugesh-kumar-4344a9156" className='footer__social-link' target="_blank">
        <i className="bx bxl-linkedin"></i>
        </a>

        <a href="https://github.com/Mugesh2297" className='footer__social-link' target= "_blank">
        <i className="bx bxl-github"></i>
        </a>

        <a href="mailto:mugeshkumark22@gmail.com" className='footer__social-link' target= "_blank">
        <i class='bx bxs-envelope' ></i>
        </a>
            </div>
            <span className='footer__copy'>Copyrights 2022 &#169; | Designed by Mugesh Kumar K </span>
        </div>
    </footer>
  )
}

export default Footer