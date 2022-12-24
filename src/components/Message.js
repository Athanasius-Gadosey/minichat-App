// jshint esversion:6
import React from 'react';
import './Message.css';
import Habib from '../img/habib.jpg';
import Venti from '../img/venti.jpg'

function Message() {
  return (
    <div className='message'>
      <div className="message__info">
        <img src={Habib} alt="" />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>Whats up?</p>
        <img src={Venti} alt="" />
      </div>
    </div>
  )
}

export default Message