// jshint esversion:6
import React from 'react';
import './Search.css';

function Search() {
  return (
    <div className='search'>
      <div className="search__form">
        <input type="text" placeholder='search a friend' />
      </div>
      <div className="user__chat">
        <img src="./img/habib.jpg" alt="" />
        <div className="chat__chatinfo">
          <span>Jamal</span>
        </div>
      </div>
    </div>
  )
}

export default Search