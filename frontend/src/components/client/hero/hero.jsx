import React, {useState} from 'react';
import '../hero/hero.scss';

const Hero = () => {
   return(
    <div className='hero-container'>
            <h1 className='hero-head'>Order now</h1>

            <button className='reservation-btn'><span className='reserve-availability'></span>Reservation  Available</button>
    </div>
   )
}

export default Hero;