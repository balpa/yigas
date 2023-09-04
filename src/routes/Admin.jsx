import '../App.css'
import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Header from '../components/Header'
import Footer from '../components/Footer'

function Admin() {
  const [postText, setPostText] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')
  const [isPostSent, setIsPostSent] = useState(false)
  const [isLoggedIn, setIsLoggedin] = useState(false)
  const [language, setLanguage] = useState('')

  const navigate = useNavigate();
  const auth = getAuth();
  const user = auth.currentUser;

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        setIsLoggedin(true)

        console.log('Logged in status: ' + isLoggedIn)
      })
      .catch((error) => console.log(`error code: ${error.code}, error message: ${error.message}`));
  }

  const sendPost = async () => {
    if (isValid) {
      try {
        const docRef = await addDoc(collection(db, 'posts'), {
          text: postText,
          selectedLanguage: language,
          date: Date.now(),
        });

        setIsPostSent(true)

        console.log('Document written with ID: ', docRef.id);
      } catch (e) {
        console.error('Error adding document: ', e);
      }
    }
  }

  const isValid = (string) => string.length > 0 && string.length < 500

  return (
    <>
    <Header />  
    <div className='admin-page-wrapper'>
      <div className='admin-page-container'>
          {!user ? (
            <>
            <input className='admin-page-email' onChange={(e) => setEmail(e.target.value)}></input>
            <input className='admin-page-password' onChange={(e) => setPassword(e.target.value)}></input>
            <button className='admin-page-sign-in-button' onClick={signIn}>Sign In</button>
            </>
          ) : (
            <>
            <label htmlFor='languages'>Select language</label>
            <select name="languages" id="admin-journal-post-language-input" onChange={(e) => {setLanguage(e.target.value)}}>
              <option value="english">English</option>
              <option value="turkish">Turkish</option>
            </select>
            <textarea className='admin-post-text' onChange={(e) => setPostText(e.target.value)}/>
            <button className='admin-post-button' onClick={sendPost}>Post</button>
            {isPostSent && <button onClick={() => navigate('/journal')}>See posts</button>}
            </>)}
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Admin