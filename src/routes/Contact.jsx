import '../App.css'
import Header from '../components/Header'
import ContactContent from '../components/contact/ContactContent'
import Footer from '../components/Footer'

export default function Contact() {
  return (
    <div className="main-wrapper">
        <Header />
        <ContactContent />
        <Footer />
    </div>
  )
}
