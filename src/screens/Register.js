// jshint esversion:6
import React from 'react';
import './Register.css';

function Register() {
  return (
    <div className='form__container'>
        <div className="form__wrapper">
          <span className='brand__name'>NotesMuNotes Chat</span>
          <span className='register'>Register</span>
            <form action="">
                <input type="text" placeholder='enter your name' />
                <input type="email" placeholder='enter your email'/>
                <input type="password" placeholder='enter your password' />
                <input type="file" id='file' />
                <label htmlFor="fle">
                    <img src="" alt="" />
                    <span>Add an avatar</span>
                </label>
                <button>Sign Up</button>
            </form>
            <p>Already a member? Login</p>
        </div>
    </div>
  )
}

export default Register