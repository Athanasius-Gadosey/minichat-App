// jshint esversion:6
import React, { useContext, useEffect, useState } from 'react';
import './Chats.css';
// import Habib from '../img/habib.jpg';
// import Venti from '../img/venti.jpg';
import { doc, onSnapshot } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

function Chats() {

  const [chats, setChats] = useState([]);

  const { currentUser } = useContext(AuthContext);
  const { dispatch } = useContext(ChatContext);

  useEffect(()=>{
    const getChats = () => {
      const unsub = onSnapshot(doc(doc, 'userChats', currentUser.uid), (doc) => {
        setChats(doc.data())
      });
  
      return () => {
        unsub();
      };
    };

    currentUser.uid && getChats();
  }, [currentUser.uid]);

  const handleSelect = () => {
    dispatch({type: 'CHANGE_USER', payload: u})
  }

  return (
    <div className='chats'>
      {Object.entries(chats)?.map((chat) => (
        <div className="user__chat" key={chat[0]} onClick={()=>handleSelect(chat[1].userInfo)} >
          <img src={chat[1].userChatInfo.photoURL} alt="" />
          <div className="user__chatinfo">
            <span>{chat[1].userChatInfo.displayName}</span>
            <p>{chat[1].userChatInfo.lastMessage?.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

{/* <div className="user__chat">
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
      </div> */}
export default Chats