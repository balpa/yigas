import '../App.css'
import Header from '../components/Header'
import JournalContent from '../components/journal/JournalContent'
import Footer from '../components/Footer'

export default function Journal() {
  return (
    <div className="main-wrapper">
      <Header />
      <JournalContent />
      <Footer />
    </div>
  )
}
