import React from 'react';
import "./scrollup.css";
const Scrollup = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = document.getElementById("scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add ("scrollup","show-scroll");

        else scrollUp.classList.remove("scrollup","show-scroll");

    })
  return (
    <a href="#"  id="scrollup">
        <i className='uil uil-arrow-up scrollup__icon'></i>
    </a>
  )
}

export default Scrollup