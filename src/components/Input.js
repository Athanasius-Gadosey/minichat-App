// jshint esversion:6
import { async } from '@firebase/util';
import { AttachFile, PhotoAlbum } from '@mui/icons-material';
import { arrayUnion, doc, serverTimestamp, Timestamp, updateDoc } from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ChatContext } from '../context/ChatContext';
import { db, storage } from '../Firebase';
import './Input.css';
import { v4 as uuid} from 'uuid';
import { updateCurrentUser } from 'firebase/auth';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';

function Input() {
  const [text, setText] = useState('');
  const [img, setImg] = useState(null);

  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const handleSend = async () =>{
    if(img) {

      const storageRef = ref(storage, uuid);

      const uploadTask = uploadBytesResumable( storageRef, img );

      uploadTask.on(
        (error) => {
          // Handle unsuccessful uploads
          // setErr(true);
        }, 
        () => {
          // Handle successful uploads on complete
          // For instance, get the download URL: https://firebasestorage.googleapis.com/...
          getDownloadURL(uploadTask.snapshot.ref).then( async(downloadURL) => {
            await updateDoc(doc(db, 'chats', data.chatId),{
              messages: arrayUnion({
                id: uuid(), text,
                senderId: updateCurrentUser.uid,
                date: Timestamp.now(),
                img: downloadURL,
              }),
            }) 
        });
       } 
      );


    }else{
     await updateDoc(doc(db, 'chats', data.chatId),{
      messages: arrayUnion({
        id: uuid(), text,
        senderId: currentUser.uid,
        date: Timestamp.now(),
      }),
     }); 
    }

    await updateDoc(doc(db, 'userChats', currentUser.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId+'.date']: serverTimestamp(),
    });

    await updateDoc(doc(db, 'userChats', data.user.uid), {
      [data.chatId + '.lastMessage']: {
        text,
      },
      [data.chatId+'.date']: serverTimestamp(),
    });
    
    setText('');
    setImg(null);
  };

  return (
    <div className='input'>
      <input type="text" placeholder='express yourself...' onChange={e=>setText(e.target.value)} value={text} />
      <div className="send">
        <AttachFile className='attach'/>
        <input type="file" id='file' onChange={e=>setImg(e.target.files[0])}/>
        <label htmlFor="file">
          <PhotoAlbum />
        </label>
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  )
}

export default Input