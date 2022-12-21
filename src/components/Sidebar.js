// jshint esversion:6
import React from 'react';
import './Sidebar.css';
import Navbar from './Navbar';
import Search from './Search';
import Chats from './Chats';

function Sidebar() {
  return (
    <div className='sidebar'>
      <Navbar />
      <Search />
      <Chats />
    </div>
  )
}

export default Sidebar