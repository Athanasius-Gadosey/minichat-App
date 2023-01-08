// jshint esversion:6
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';

function Login() {
  const [err, setErr] = useState(false);
  const navigate = useNavigate()

  const handleSubmit = async (e) =>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try{
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } 
    catch(err){
      setErr(true)
    }
  };
  return (
    <div className='form__container'>
        <div className="form__wrapper">
          <span className='brand__name'>Santacy Chat</span>
          <span className='login'>Login</span>
            <form action="" onSubmit={handleSubmit}>
                <input type="email" placeholder='enter your email'/>
                <input type="password" placeholder='enter your password' />
                <button>Login</button>
                {err && <span>Oops!! Something Went Wrong</span> }
            </form>
            <p>A new member? <Link to='/register'>Register</Link></p>
        </div>
    </div>
  )
}

export default Login