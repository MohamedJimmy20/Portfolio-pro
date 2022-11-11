import React, { useState } from 'react'
import "./qualification.css"


export default function Qualification() {
    const [toggleState, setToggleState] = useState(1)
    
    const toggleTap = (index) => {
        setToggleState(index)
    }


  return (
    <section className="qualification section" id='qualification'>
        <h2 className="section__title">Qualifications</h2>
        <span className="section__subtitle">My Personal Journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1 ?
                "qualification__button qualification__active button--flex" :
                 "qualification__button button--flex" }
                 onClick={() => toggleTap(1)}>
                    <i className='uil uil-graduation-cap qualification__icon'></i>                    
                    Education
                </div>
                <div className={toggleState === 2 ?
                "qualification__button qualification__active button--flex" :
                 "qualification__button button--flex" }
                 onClick={() => toggleTap(2)}>
                    <i className='uil uil-briefcase-alt qualification__icon'></i>
                    Experience
                </div>                
            </div>

            <div className="qualification__section">
                <div className={toggleState === 1 ?
                 "qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">
                        <div>
                            <h3 className="qualification__title">Civil Engineer</h3>
                            <span className="qualification__subtitle">Zagazig University</span>  
                            <div className="qualification__calender">
                            <i class="uil uil-calendar-alt"></i> 2018 - Present
                            </div>
                        </div>

                        <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                        </div>
                       
                    </div>

                    <div className="qualification__data">
                    <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                        </div>

                    <div>
                            <h3 className="qualification__title">Web Development Bootcamp</h3>
                            <span className="qualification__subtitle">Udemy.com</span>
                            
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 4/2020 - 9/2020
                            </div>
                    </div>
                                             
                    </div>   

                    

                     <div className="qualification__data">
                        
                        

                    <div>
                    <h3 className="qualification__title">FullStack JavaScript Course</h3>
                            <span className="qualification__subtitle">Udemy.com</span>
                            
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 10/2020 - 2/2021
                            </div>
                    </div>
                        <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                        </div>

                       
                    </div>

                     <div className="qualification__data">
                     <div></div>
                        <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                        </div>

                    <div>
                    <h3 className="qualification__title">Full-Stack WebDevelopment</h3>
                            <span className="qualification__subtitle">Udacity.com</span>
                            
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 1/2020 - 6/2020
                            </div>
                    </div>
                        

                       
                    </div>             




                </div>


                <div className={toggleState === 2 ?
                 "qualification__content qualification__content-active"
                : "qualification__content"}>
                    <div className="qualification__data">

                        <div></div>

                        <div>
                            <span className="qualification__rounder"></span>
                                <span className="qualification__line"></span>
                            
                        </div>


                        <div>
                            <h3 className="qualification__title">FreeLancer</h3>
                            <span className="qualification__subtitle">Upwork</span>
                            
                            <div className="qualification__calender">
                                <i class="uil uil-calendar-alt"></i> 2021 - Present
                            </div>
                        </div>                        
                    </div>

                      

                    

                               




                </div>




            </div>
        </div>



    </section>
  )
}
