import React, { useState } from 'react';
import "./header.css";

function Header() {
    const[Toggle, ShowMenu] = useState(false);
    const [toggleState, setToggleState] = useState(1);
    const toggleTab = (index)=>{
        setToggleState(index);
    };
  return (
    <header className='header'>
        <nav className='nav container'>
            <a href="index.html" className='nav__logo'>Mugesh Kumar K</a>

        <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
            <ul className='nav__list grid'>
                <li className='nav__item'>
                 <a href='#home' className= {toggleState === 1 ? "nav__link  active-link":"nav__link"}
                  onClick={()=>toggleTab(1)}>
                    <i className='uil uil-estate nav__icon'></i>
                    Home
                 </a>
                </li>
                <li className='nav__item'>
                 <a href='#about' className= {toggleState === 2 ? "nav__link  active-link":"nav__link"}
                 onClick={()=>toggleTab(2)}>
                    <i className='uil uil-user nav__icon'></i>
                    About
                 </a>
                </li>
                <li className='nav__item'>
                 <a href='#skills' className= {toggleState === 3 ? "nav__link  active-link":"nav__link"}
                 onClick={()=>toggleTab(3)}>
                    <i className='uil uil-file-alt nav__icon'></i>
                    Skills
                 </a>
                </li>

                <li className='nav__item'>
                 <a href="#portfolio" className= {toggleState === 4 ? "nav__link  active-link":"nav__link"}
                 onClick={()=>toggleTab(4)}>
                    <i className='uil uil-scenery nav__icon'></i>
                    Portfolio
                 </a>
                </li>

                <li className='nav__item'>
                 <a href="#contact" className= {toggleState === 5 ? "nav__link  active-link":"nav__link"}
                 onClick={()=>toggleTab(5)}>
                    <i className='uil uil-message nav__icon'></i>
                    Contact
                 </a>
                </li>
            </ul>
            <i className='uil uil-times nav__close'  onClick={()=>ShowMenu(!Toggle)}></i>
        </div>
        <div className= "nav__toggle" onClick={()=>ShowMenu(!Toggle)}>
        <i className="uil uil-apps"></i>
        </div>
        </nav>
    </header>
  )
}

export default Header