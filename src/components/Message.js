// jshint esversion:6
import React, { useContext, useEffect, useRef } from 'react';
import './Message.css';
// import Habib from '../img/habib.jpg';
// import Venti from '../img/venti.jpg';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';

function Message({message}) {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef()

  useEffect(() => {
    ref.current?.scrollIntoView({behavior: 'smooth'})
  }, [message])

  return (
    <div ref={ref}
     className={`message ${message.senderId === currentUser.uid}`}>
      <div className="message__info">
        <img src={message.senderId === currentUser.uid ? currentUser.photoURL: data.user.photoURL} alt="" />
        <span>just now</span>
      </div>
      <div className="message__content">
        <p>{message.text}</p>
        {message.img &&<img src={message.img} alt="" />}
      </div>
    </div>
  )
}

export default Message