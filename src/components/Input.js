// jshint esversion:6
import { AttachFile, PhotoAlbum } from '@mui/icons-material';
import React from 'react';
import './Input.css';

function Input() {
  return (
    <div className='input'>
      <input type="text" placeholder='express yourself...' />
      <div className="send">
        <AttachFile className='attach'/>
        <input type="text" id='file'/>
        <label htmlFor="file">
          <PhotoAlbum />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input