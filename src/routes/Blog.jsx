import '../App.css'
import Header from '../components/Header'
import Footer from '../components/Footer'
import BlogContent from '../components/blog/BlogContent'

function Blog() {
  return (
    <div className="main-wrapper">
      <Header />
      <BlogContent />
      <Footer />
    </div>
  )
}

export default Blog