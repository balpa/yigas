import '../App.css'
import { useState, useEffect } from 'react';
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const [postText, setPostText] = useState('')
  const [password, setPassword] = useState('')
  const [adminPassword, setAdminPassword] = useState(undefined)
  const [passwordMatched, setPasswordMatched] = useState(false)
  const [isDataFetched, setIsDataFetched] = useState(false)
  const [isPostSent, setIsPostSent] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPosts = async () => {
      if (!isDataFetched) {
        const querySnapshot = await getDocs(collection(db, "admin-password"));
        querySnapshot.forEach((doc) => setAdminPassword(doc.data().password));
  
        setIsDataFetched(true)
      }
    }
  
    fetchPosts()
  }, [])

  useEffect(() => {
    if (!passwordMatched && (password === adminPassword)) {
      setPasswordMatched(true)
    }
  }, [password])

  const sendPost = async () => {
    if (isValid) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          text: postText,
          date: Date.now(),
        });

        setIsPostSent(true)

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  }

  const isValid = (string) => string.length

  return (
    <div className='admin-page-wrapper'>
      <div className='admin-page-container'>
          {!passwordMatched && <input className='admin-page-password' onChange={(e) => setPassword(e.target.value)}></input>}
          {passwordMatched && (<>
            <textarea className='admin-post-text' onChange={(e) => setPostText(e.target.value)}/>
            <button className='admin-post-button' onClick={sendPost}>Post</button>
            {isPostSent && <button onClick={() => navigate('/journal')}>See posts</button>}
          </>)}
      </div>
    </div>
  )
}

export default Admin