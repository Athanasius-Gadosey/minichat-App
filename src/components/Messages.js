// jshint esversion:6
import { onSnapshot } from 'firebase/firestore';
import React, { useContext, useEffect, useState } from 'react';
import { ChatContext } from '../context/ChatContext';
import { db } from '../Firebase';
import Message from './Message';
import './Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);
  
  useEffect(() => {
    const unSub = onSnapshot(doc(db, 'chata', data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data())
    })

    return ()=>{
      unSub()
    }
  }, [data.chatId])

  return (
    <div className='messages'>
      {messages.map((m) => {
        <Message message={m} />
      })}
      
    </div>
  )
}

export default Messages