// jshint esversion:6
import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <span className='brand__name'>NoMuNo chat</span>
      <div className="user">
        <img src="../img/habib.jpg" alt="" />
        <span>Habib</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar