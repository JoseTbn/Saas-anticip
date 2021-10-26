import React from 'react'
import './Hero.css'
import home1 from '../../assets/home1.svg'

export default function Hero() {
    return (
      <div className="hero">
        <div className="hero__container">
          <div className="hero__container--left">
           <div className='hero__container--left__content'> 
            <h1> Let's <span style={{color:'#ef233c'}}>grow</span> your businenss</h1>
            <h1>with the right <span style={{color:'#ef233c'}} > talents </span> </h1>
            <h5>A 100% online ICT staffing agency</h5>
</div>
            <button className="hero__container--btn">Discover</button>
          </div>
          <div className="hero__container--right">
              <img src={home1} alt='' class='hero__container--img'/>
          </div>
        </div>
      </div>
    );
}
