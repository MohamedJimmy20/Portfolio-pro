import React from 'react'
import './about.css'
import myphoto from "../../images/myphoto.jpg"




export default function About() {
  return (
    <div>
      <section className="about section" id="about">
        <h2 className="section__title">About Me </h2>
          <span className="section__subtitle"> My introduction</span>

          <div className="about__container container grid">
            <img src={myphoto} alt="" className='about__img' />
            
            <div className="about__data">

              <div className="about__info grid">
                <div className="about__box">
                <i className="uil uil-award-alt about__icon"></i>
                  <h3 className="about__title">Experience</h3>
                    <span className="about__subtitle"> +2 Years Working </span>                  
                </div>
                <div className="about__box">
                <i className="uil uil-suitcase-alt about__icon"></i>
                  <h3 className="about__title">Completed</h3>
                    <span className="about__subtitle"> 6 + Projects  </span>                  
                </div>
                <div className="about__box">
                <i class="bx bx-support about__icon"></i>
                  <h3 className="about__title">Suppot</h3>
                    <span className="about__subtitle"> Online 24/7 </span>                  
                </div>
              </div>


              <p className='about__description'>
                        Iam Full-stack web developer Able to code web pages from the ground up using HTML5, CSS3,
                        JavaScript, Bootstrap, Angular, ReactJS, 
                        Node.js,MongoDB and ExpressJS. Innovative to effectively self-manage during independent
                        projects as 
                        well as collaborate in a team setting.
              </p>

              <a href='Resume.pdf' download='Mohamed Resume.pdf'
               className='button button--flex'>
                &nbsp;  Download CV &nbsp; <i class="uil uil-file"></i> &nbsp; </a>
            </div>

          </div>
        
      </section>
    </div>
  )
}
