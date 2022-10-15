import React from 'react'
import './home.css'

import Typical from 'react-typical'





export default function Home() {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">


        <div className="home__social">

            <a href='https://github.com/MohamedJimmy20'
            className='home__social-icon' target="_black">
            <i class="uil uil-github"></i>
            </a>
            <a href='https://linkedin.com/in/mohamed-gamal-bs220'
            className='home__social-icon' target="_black">
            <i class="uil uil-linkedin"></i>
            </a>
            <a href="mailto: mohamedgamalahmed20@gmail.com"
            className='home__social-icon' target="_black">
            <i class="uil uil-google"></i>
            </a>
        </div>   

        <div className="home__img"></div>

        <div className="home__data">
          <h1 className='home__title'> Mohamed Gamal</h1>

          <h3 className="home__subtitle"> 
                     
          {" "}
          <Typical 
          loop={Infinity}
          steps={[
            "<DevMO>",
            2000,
            "FullStack Web Dev",
            2000,
            "MEAN/MERN Stack Dev",
            2000,
            "NodeJs Developer",
            2000,
          ]}></Typical>

        
          </h3>

          <p className="home__description">
          Able to code web pages from the ground
          up using Nodejs, Angular, ExpressJs, MongoDB also ReactJS
          </p>

          <a href='#contact' className='button button--flex'>
            
                <buttom >
                &nbsp;  Contact Me <i class="uil uil-envelope-edit button__icon"> </i> &nbsp; 
                  </buttom>
            </a>
        </div>             


        </div>

        <div className="home__scroll">
          <a href='#about' className='home__scroll-button button--flex'>
          <i className="uil uil-angle-double-down wheel"></i> &nbsp;
            <span className='home__scroll-name'>Scroll Down</span>
            
          </a>
        </div>


      </div>
    </section>
  )
}


