// jshint esversion:6
import React from 'react';
import './Login.css';

function Login() {
  return (
    <div className='form__container'>
        <div className="form__wrapper">
          <span className='brand__name'>NotesMuNotes Chat</span>
          <span className='login'>Login</span>
            <form action="">
                <input type="email" placeholder='enter your email'/>
                <input type="password" placeholder='enter your password' />
                <button>Login</button>
            </form>
            <p>A new member? Register</p>
        </div>
    </div>
  )
}

export default Login