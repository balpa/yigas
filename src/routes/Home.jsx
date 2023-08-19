import '../App.css'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'

function Home() {

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <Content />
        <Footer />
      </div>
    </>
  )
}

export default Home