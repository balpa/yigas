import '../../App.css'
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from 'react';
import { db } from '../../../firebase'
import ReactHtmlParser from 'react-html-parser';

function BlogPost() {
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [test, setTest] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isDataFetched) {
        const querySnapshot = await getDocs(collection(db, "blog"));
        querySnapshot.forEach((doc) => setTest(ReactHtmlParser((doc.data().text))));
  
        setIsDataFetched(true)
      }
    }
  
    fetchPosts()
  }, [])

  return (
    <div className='blog-post-wrapper'>
        <div className='blog-post-container'>
          {test}
        </div>
    </div>
  )
}

export default BlogPost