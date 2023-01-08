// jshint esversion:6
import React, { useContext } from 'react';
import './Chat.css';
import { VideocamSharp, Person3Rounded, MoreHorizRounded } from '@mui/icons-material';
import Messages from './Messages';
import Input from './Input';
import { ChatContext } from '../context/ChatContext';

function Chat() {
  const { data } = useContext(ChatContext);
  return (
    <div className='chat'>
      <div className="chat__info">
        <span>{data.user?.displayName}</span>
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