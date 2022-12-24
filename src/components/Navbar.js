// jshint esversion:6
import React from 'react';
import './Navbar.css';
import Avengers from '../img/avengers.jpg'

function Navbar() {
  return (
    <div className='navbar'>
      <span className='brand__name'>NoMuNo chat</span>
      <div className="user">
        <img src={Avengers} alt="" />
        <span>Habib</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar