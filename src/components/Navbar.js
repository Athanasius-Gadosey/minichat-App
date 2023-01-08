// jshint esversion:6
import React, { useContext } from 'react';
import './Navbar.css';
// import Avengers from '../img/avengers.jpg'
import { signOut } from 'firebase/auth';
import { auth } from '../Firebase';
import { AuthContext } from '../context/AuthContext';

function Navbar() {
  const {currentUser} = useContext(AuthContext)
  
  return (
    <div className='navbar'>
      <span className='brand__name'>NoMuNo chat</span>
      <div className="user">
        <img src={currentUser.photoURL} alt="" />
        <span> {currentUser.displayName} </span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  )
}

export default Navbar