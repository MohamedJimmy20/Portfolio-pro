import React from 'react'
import "./footer.css"


export default function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">
                {"<DevMo>"}
            </h1>
            <ul className="footer__list">
            <li>
                    <a href="#home" className='footer__link'>
                    <i className="uil uil-estate footer__icon"></i> Home</a>
                </li>
                <li>
                    <a href="#about" className='footer__link'>
                    <i className="uil uil-user footer__icon"></i> About</a>
                </li>
                <li>
                    <a href="#skills" className='footer__link'>
                    <i className="uil uil-file-alt footer__icon"></i> Skills</a>
                </li>
                
            </ul>

            <div className="footer__social">
            <a href='https://www.facebook.com/mohamed.gamal.54966834/'
            className='footer__social-link' target="_black">
            <i class="uil uil-facebook"></i>
            </a>
            <a href='https://www.instagram.com/mohamedjimmy20/'
            className='footer__social-link' target="_black">
            <i class="uil uil-instagram"></i>
            </a>
            <a href="https://twitter.com/MohmedJimmy20"
            className='footer__social-link' target="_black">
            <i class="uil uil-twitter"></i>
            </a>
            <a href='https://github.com/MohamedJimmy20'
            className='footer__social-link' target="_black">
            <i class="uil uil-github"></i>
            </a>
            <a href='https://linkedin.com/in/mohamed-gamal-bs220'
            className='footer__social-link' target="_black">
            <i class="uil uil-linkedin"></i>
            </a>
            </div>
            
            <span className='footer__copy'>&#169; Mohamed Gamal.
             All rights reserved</span>


        </div>
    </footer>
  )
}
