import '../../App.css'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';

function ContactContent() {
  const form = useRef();

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [emailSent, setEmailSent] = useState(false)

  const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailSent && emailValidation()) {
      emailjs.sendForm('service_4up0xa5', 'template_kn2ghfh', form.current, `${import.meta.env.VITE_EMAIL_KEY}`)
        .then((result) => {
          console.log(result.text);

          setEmailSent(true)
        }, (error) => {
          console.log(error.text);
        });
    }
  };

  const emailValidation = () => {
    const isEmailEmpty = email === ''
    const isEmailValid = emailValidationRegex.test(email)
    const isSubjectEmpty = subject === ''
    const isContentEmpty = content === ''

    return !isEmailEmpty && !isSubjectEmpty && !isContentEmpty && isEmailValid
  }

  return (
    <div className='contact-content-wrapper'>
      <div className='contact-content-container'>
        <div className='contact-content-box'>
          <div className="contact-content-email-title">Reach out to me!</div>
          <form ref={form} onSubmit={sendEmail}>
            <input
              className='contact-content-email-input default-input'
              placeholder='Your E-mail'
              type='email'
              name="user_email"
              maxLength={100}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className='contact-content-email-subject-input default-input'
              placeholder='Subject'
              type='text'
              name='email_title'
              maxLength={100}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
            <textarea
              className='contact-content-email-content-input'
              placeholder='Write your email'
              type='text'
              name='message'
              maxLength={1000}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <input className="email-submit-button" type='submit' value='Send' />
          </form>
          {/* <button className='contact-content-email-send-button'>Send</button> */}
        </div>
      </div>
    </div>
  )
}

export default ContactContent