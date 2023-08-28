import '../App.css'
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function Admin() {
  const [postText, setPostText] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isPostSent, setIsPostSent] = useState(false)

  const navigate = useNavigate();
  const auth = getAuth();

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => console.log('Logged in!'))
      .catch((error) => console.log(`error code: ${error.code}, error message: ${error.message}`));
  }

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
          {!auth ? (
            <>
            <input className='admin-page-email' onChange={(e) => setEmail(e.target.value)}></input>
            <input className='admin-page-password' onChange={(e) => setPassword(e.target.value)}></input>
            <button className='admin-page-sign-in-button' onClick={signIn}>Sign In</button>
            </>
          ) : (
            <>
            <textarea className='admin-post-text' onChange={(e) => setPostText(e.target.value)}/>
            <button className='admin-post-button' onClick={sendPost}>Post</button>
            {isPostSent && <button onClick={() => navigate('/journal')}>See posts</button>}
            </>)}
      </div>
    </div>
  )
}

export default Admin