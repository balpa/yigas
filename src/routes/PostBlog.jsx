import '../App.css'
import { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';

function PostBlog() {
  const [blogContent, setBlogContent] = useState('');
  const [isPostSent, setIsPostSent] = useState(false)

  const sendPost = async () => {
      try {
        const docRef = await addDoc(collection(db, 'blog'), {
          text: blogContent,
          date: Date.now(),
        });

        setIsPostSent(true)

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
  }

  return (
    <>
      <div className="main-wrapper">
        <Header />
        <div className="quill-wrapper">
              <ReactQuill theme="snow" value={blogContent} onChange={setBlogContent} />
        </div>
        <button className='post-blog-button' onClick={() => !isPostSent && sendPost()}>Post</button>
        <Footer />
      </div>
    </>
  )
}

export default PostBlog