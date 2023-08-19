import '../../App.css'

function ContactContent() {
  //const emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const handleSubmit = () => {
    
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
            ></input>
            <input
              className='contact-content-email-subject-input default-input'
              placeholder='Subject'
              type='text'
            ></input>
            <textarea
              className='contact-content-email-content-input'
              placeholder='Write your email'
              type='text'
            ></textarea>
            <button className='contact-content-email-send-button' onClick={handleSubmit}>Send</button>
          </div>
        </div>
    </div>
  )
}

export default ContactContent