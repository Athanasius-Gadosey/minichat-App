// jshint esversion:6
import React from 'react';
import './Chats.css';
import Habib from '../img/habib.jpg';
import Venti from '../img/venti.jpg';

function Chats() {
  return (
    <div className='chats'>
      <div className="user__chat">
        <img src={Habib} alt="" />
        <div className="user__chatinfo">
          <span>Santacy</span>
          <p>Hello, Jamal I've missed you a lot.</p>
        </div>
      </div>
      <div className="user__chat">
        <img src={Venti} alt="" />
        <div className="user__chatinfo">
          <span>Jamal</span>
          <p>Dem start date rush oo!!</p>
        </div>
      </div>
      <div className="user__chat">
        <img src={Habib} alt="" />
        <div className="user__chatinfo">
          <span>MikeHope</span>
          <p>O Boy Asiamah Marry oo </p>
        </div>
      </div>
      <div className="user__chat">
        <img src={Venti} alt="" />
        <div className="user__chatinfo">
          <span>Jerry</span>
          <p>Onua! Messi win oo!!</p>
        </div>
      </div>
    </div>
  )
}

export default Chats