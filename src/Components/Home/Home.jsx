import React from 'react';
import Data from './Data';
import "./home.css";
import Social from './Social';
function Home() {
    return (
        <section className='home__section' id="home">
            <div className='home__container container grid'>
                <div className="home__content grid">
                    <Social />
                    <div className='home__img'></div>
                    <Data />
                </div>
            </div>
        </section>
    )
}

export default Home