// jshint esversion:6
import React from 'react';
import './Chat.css';
import { VideocamSharp, Person3Rounded, MoreHorizRounded } from '@mui/icons-material';
import Messages from './Messages';
import Input from './Input';

function Chat() {
  return (
    <div className='chat'>
      <div className="chat__info">
        <span>Santacy</span>
        <div className="chat__icons">
          <VideocamSharp/>
          <Person3Rounded />
          <MoreHorizRounded />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat