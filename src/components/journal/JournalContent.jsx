import '../../App.css'
import Post from './Post';
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../../firebase';

function JournalContent() {
  const [postsData, setPostsData] = useState([])
  const [postText, setPostText] = useState('')
  const [isDataFetched, setIsDataFetched] = useState(false)

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isDataFetched) {
        const querySnapshot = await getDocs(collection(db, "posts"));
        querySnapshot.forEach((doc) => setPostsData(oldArray => [...oldArray, doc.data()]));

        setIsDataFetched(true)
      }
    }
  
  fetchPosts()
  }, [])

  const sendPost = async () => {
    if (isValid) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          text: postText,
          date: Date.now(),
        });
        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  }

  const isValid = (string) => {
    return string.length
  }

  return (
    <div className='journal-content-wrapper'>
        <div className='journal-content-container'>
          <div className='journal-content-quote'>&quot;A wise man, therefore, proportions his belief to the evidence.&quot;</div>
          <div className='journal-content-title'>my 2 cents</div>
          <div className='journal-test'>
            {/* <textarea className='journal-content-text-area' onChange={(e) => setPostText(e.target.value)}/>
            <button className='journal-content-send-button' onClick={sendPost}>Send</button> */}
          </div>
          {postsData.map((post, index) => <Post post={post} key={index}/>)}
        </div>
    </div>
  )
}

export default JournalContent