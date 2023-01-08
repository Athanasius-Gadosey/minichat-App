// jshint esversion:6
import React, { useContext, useState } from 'react';
import './Search.css';
// import Habib from '../img/habib.jpg';
import { db } from '../Firebase';
import { collection, doc, getDocs, query, serverTimestamp, setDoc, updateDoc, where } from 'firebase/firestore';
import { AuthContext } from '../context/AuthContext';

function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const {currentUser} = useContext(AuthContext)
  
  const handleSearch = async () => {
    const q = query(collection(db, 'users'), where('displayName', '==', username));

    try{
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUser(doc.data());
      });
    }
    catch(err) {
      setErr(true);
    }

  };

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch();
  }

  const handleSelect = () =>{
    // check whether group(chats in firestore) exists, if not create
    const combinedId = currentUser.uid > user.uid ? currentUser.uid + user.uid : user.uid + currentUser.uid;

    try {
      const res = await getDoc(doc(db, 'chats', combinedId));

      if (!res.exists()) {
        // create a chat in chats collections
        await setDoc(doc(db, 'chats', combinedId), { messages: [] });

        // create user chats
        await updateDoc(doc(db, 'userChats', currentUser.uid), {
          [combinedId + '.userInfo']: {
            uid: user.uid, displayName: user.displayName, photoURL: user.photoURL,
          },
          [combinedId+'.date']: serverTimestamp(),
        });

        await updateDoc(doc(db, 'userChats', user.uid),{
          [combinedId + '.userInfo']: {
            uid: currentUser.uid, displayName: currentUser.displayName, photoURL: currentUser.photoURL,
          },
          [combinedId + '.date']: serverTimestamp(),
        });
      }
    } catch(err){
      setErr(true)
    }
    // create user chats
    setUser(null);
    setUsername('')
  };

  return (
    <div className='search'>
      <div className="search__form">
        <input type="text" placeholder='search a friend' onKeyDown={handleKey} onChange={e=>setUsername(e.target.value)} value={username} />
      </div>
      {err && <span>Found no user</span>}
      {user && <div className="user__chat" onClick={handleSelect}>
        <img src={user.photoURL} alt="" />
        <div className="user__chatinfo">
          <span> {user.displayName} </span>
        </div>
      </div>}
    </div>
  )
}

export default Search