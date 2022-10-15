import React, {useRef} from 'react'
import "./contact.css"
import emailjs from '@emailjs/browser';


export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_i5yz632', 'template_gkhg9vl', form.current, 'AIxihq9X_gVSDgT7J')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className='section__subtitle'>Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__card">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">mohamedgamalahmed20@gmail.com</span>

              <a href="mailto:mohamedgamalahmed20@gmail.com"  className="contact__button">Write me {" "}
              <i className="uil uil-arrow-right contact__button-icon"></i>
               </a>
            </div>

            <div className="contact__card">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">+201275263195</span>

              <a href="http://api.whatsapp.com/send?phone=201275263195&text=Hello,
               more information!" target="blank" className="contact__button">Write me {" "}
              <i className="uil uil-arrow-right contact__button-icon"></i> </a>
            </div>


          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">Send Email</h3>

          <form ref={form} onSubmit={sendEmail}
           className="contact__form">
            <div className="contact__form-div">
              <label className="contact_form-tag">Name</label>
              <input type="name" name='name'
              className='contact__form-input'
              placeholder='Enter your name' required />
            </div>

            <div className="contact__form-div">
              <label className="contact_form-tag">Mail</label>
              <input type="email" name='email'
              className='contact__form-input'
              placeholder='Enter your email' required />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact_form-tag ">Message</label>
              <textarea name="Message" cols="30" rows="10"
              className='contact__form-input' placeholder='Write your message' required></textarea>
            </div>

            <button className="button button--flex">
                &nbsp;  Send Message <i class="uil uil-envelope-upload-alt button__icon"></i> &nbsp; 
                  </button>


          </form>
        </div>


      </div>
    </section>
  )
}
