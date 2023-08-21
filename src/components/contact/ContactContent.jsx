import '../../App.css'
import { useState } from 'react'

function ContactContent() {
  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [content, setContent] = useState('')

  const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleSubmit = async () => {
  }

  return (
    <div className='contact-content-wrapper'>
        <div className='contact-content-container'>
          <div className='contact-content-box'>
            <div className="contact-content-email-title">TITLE</div>
            <input
              className='contact-content-email-input default-input'
              placeholder='Your E-mail'
              type='email'
              maxLength={100}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className='contact-content-email-subject-input default-input'
              placeholder='Subject'
              type='text'
              maxLength={100}
              onChange={(e) => setSubject(e.target.value)}
            ></input>
            <textarea
              className='contact-content-email-content-input'
              placeholder='Write your email'
              type='text'
              maxLength={1000}
              onChange={(e) => setContent(e.target.value)}
            ></textarea>
            <button className='contact-content-email-send-button' onClick={handleSubmit}>Send</button>
          </div>
        </div>
    </div>
  )
}

export default ContactContent