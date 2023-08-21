import '../../App.css'
import Post from './Post';
import { useState, useEffect } from 'react';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';

function JournalContent() {
  const [postsData, setPostsData] = useState([])
  const [isDataFetched, setIsDataFetched] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isDataFetched) {
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsArray = [];
        querySnapshot.forEach((doc) => postsArray.push(doc.data()));

        sortPostsData(postsArray);
        setPostsData(postsArray);
        setIsDataFetched(true)
      }
    }
  
    fetchPosts()
  }, [])

  const sortPostsData = (arr) => {
    arr.sort(function(b, a) {
      var keyA = new Date(a.date), keyB = new Date(b.date);
      if (keyA < keyB) return -1;
      if (keyA > keyB) return 1;
      return 0;
    });
  }

  return (
    <div className='journal-content-wrapper'>
        <div className='journal-content-container'>
          <div className='journal-content-quote'>&quot;A wise man, therefore, proportions his belief to the evidence.&quot;</div>
          <div className='journal-content-title'>my 2 cents</div>
          {postsData.map((post, index) => <Post post={post} key={index}/>)}
        </div>
    </div>
  )
}

export default JournalContent