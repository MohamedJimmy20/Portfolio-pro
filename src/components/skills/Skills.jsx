import React from 'react'

import "./skills.css"

export default function Skills() {
  return (
    <section className="skills section" id="skills">
        <h2 className="section__title">Skills</h2>
        <span className='section__subtitle'>My technical level</span>

        <div className="skills__container container grid">
            <div className="skills__content">
                <h3 className="skills__title">Frontend Development</h3>

                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>                            
                            <div>
                                <h3 className="skills__name">HTML</h3>
                                    <span className="skills__level">Experienced</span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Css</h3>
                                    <span className="skills__level">Intermediate</span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">JavaScript</h3>
                                    <span className="skills__level">Experienced</span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Git</h3>
                                    <span className="skills__level">Intermediate</span>
                                
                            </div>
                        </div>
                        
                        </div>
                        
                        <div className="skills__group">

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Angular</h3>
                                    <span className="skills__level">Experienced</span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Bootstrap</h3>
                                    <span className="skills__level">Experienced</span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">ReactJS</h3>
                                    <span className="skills__level">Intermediate</span>
                                
                            </div>
                        </div>
                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Jquery</h3>
                                    <span className="skills__level">Intermediate</span>
                                
                            </div>
                        </div>

                        </div>

                       




                    </div>
                
            </div>

            <div className="skills__content">
                <h3 className="skills__title">Backend Development</h3>
                <div className="skills__box">
                    <div className="skills__group">
                        <div className="skills__data">
                        <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Node Js</h3>
                                    <span className="skills__level">Experienced</span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">MongoDB</h3>
                                    <span className="skills__level">Intermediate </span>
                                
                            </div>
                        </div>

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">Express.js</h3>
                                    <span className="skills__level">Intermediate</span>
                                
                            </div>
                        </div>

                        </div>

                        <div className="skills__group">

                        <div className="skills__data">
                            <i className='bx bx-badge-check badge__check'></i>  
                            <div>
                                <h3 className="skills__name">SQL/MySQL</h3>
                                    <span className="skills__level">Basics</span>
                                
                            </div>
                        </div>

                        </div>

                        




                    
                </div>
            </div>
        </div>
    </section>
  )
}
