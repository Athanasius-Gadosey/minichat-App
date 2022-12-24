// jshint esversion:6
import React from 'react';
import Message from './Message';
import './Messages.css';

function Messages() {
  return (
    <div className='messages'>
        <Message />
        <Message />
        <Message />
        <Message />
        <Message />
    </div>
  )
}

export default Messages