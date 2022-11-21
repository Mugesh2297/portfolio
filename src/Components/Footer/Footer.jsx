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
            <a href="#linked" className='footer__social-link' target="_blank">
        <i className="bx bxl-linkedin"></i>
        </a>

        <a href="https://github.com/Mugesh2297" className='footer__social-link' target= "_blank">
        <i className="bx bxl-github"></i>
        </a>
            </div>
            <span className='footer__copy'>&#169; Mugesh Kumar K. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer