import '../../App.css'
import { useState, useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser';

function ContactContent() {
  const form = useRef();

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')
  const [emailSent, setEmailSent] = useState(false)
  const [sendButtonText, setSendButtonText] = useState('Send')
  const [sendButtonColor, setSendButtonColor] = useState('#800020')
  const [errorMessageStatus, setErrorMessageStatus] = useState(false)

  const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  useEffect(() => {
    setEmailSent(localStorage.getItem('email-sent'))
  }, [])

  const sendEmail = (e) => {
    e.preventDefault();

    if (!emailSent && emailValidation()) {
      emailjs.sendForm(
        `${import.meta.env.VITE_EMAIL_SERVICE_ID}`,
        `${import.meta.env.VITE_EMAIL_TEMPLATE_ID}`,
        form.current,
        `${import.meta.env.VITE_EMAIL_KEY}`).then((result) => {
          console.log(`Email sent status: ${result.text}`);

          localStorage.setItem('email-sent', true);

          setSendButtonText('Email Sent!')
          setSendButtonColor('green')
          setErrorMessageStatus(false)
        }, (error) => console.log(error.text));
    } else {
      setErrorMessageStatus(true)

      console.log('email already sent or not valid!')
    }
  };

  //additional validation needed
  const emailValidation = () => email !== '' && subject !== '' && content !== '' && emailValidationRegex.test(email)

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
            <input className="email-submit-button" type='submit' value={`${sendButtonText}`} style={{backgroundColor: sendButtonColor}} />
          </form>
          {errorMessageStatus && <div style={{color: 'red', textAlign: 'center', width: '100%'}}>Email already sent or not valid!</div>}
        </div>
      </div>
    </div>
  )
}

export default ContactContent