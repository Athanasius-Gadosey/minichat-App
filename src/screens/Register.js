// jshint esversion:6
import React, { useState } from 'react';
import './Register.css';
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from '../Firebase';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { async } from '@firebase/util';
import { doc, setDoc } from 'firebase/firestore';
import { Link, useNavigate } from 'react-router-dom';


function Register() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try{
      const res = await createUserWithEmailAndPassword(auth, email, password);

      const storageRef = ref(storage, displayName);

      const uploadTask = uploadBytesResumable( storageRef );

      uploadTask.on(


        (error) => {
        // Handle unsuccessful uploads
        setErr(true);
        }, 
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
          await updateProfile(res.user,{
            displayName,
            photoURL:downloadURL,
          });
          // Add a new document in collection 
          await setDoc(doc(db, 'users', res.user.uid), {
            uid: res.user.uid,
            displayName,
            email,
            photoURL: downloadURL,
          });

          await setDoc(doc(db, 'user__chats', res.user.id), {});
          navigate('/');
      });
  }
);

    } 
    catch(err){
      setErr(true)
    }
}

  return (
    <div className='form__container'>
        <div className="form__wrapper">
          <span className='brand__name'>Santacy Chat</span>
          <span className='register'>Register</span>
            <form action="" onSubmit={handleSubmit}>
                <input type="text" placeholder='enter your name' />
                <input type="email" placeholder='enter your email'/>
                <input type="password" placeholder='enter your password' />
                <input type="file" id='file' />
                <label htmlFor="fle">
                    <img src="" alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
                {err && <span>Oops!! Something Went Wrong</span>}
            </form>
            <p>Already a member? <Link to='/login'>Login</Link></p>
        </div>
    </div>
  )
}

export default Register