import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore/lite';
import { initializeApp } from 'firebase/app';



// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAONc-m1sh9nyZ51fJ3DVO20m1kyJ4CDJQ",
    authDomain: "snake-app-e77a2.firebaseapp.com",
    projectId: "snake-app-e77a2",
    storageBucket: "snake-app-e77a2.appspot.com",
    messagingSenderId: "809052944260",
    appId: "1:809052944260:web:a0deabb58dbdc0fbc04fd1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const DataEnter = () => {
  const [bodycolor, setBodycolor] = useState('');
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [poison, setPoison] = useState('');
  const [style, setStyle] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, 'snakedata'), {
        bodycolor,
        name,
        photo,
        poison,
        style,

      });
      console.log('Document written with ID: ', docRef.id);
      // Reset form fields
      setBodycolor ("");
      setName("");
      setPhoto("")
      setPoison("")
      setStyle("")

    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <>
    
    <div className='slideadd'>
      <h3>Add to Download section</h3>
      <br/>
      <div className='form'>

    <form onSubmit={handleSubmit}>
    <label>
        Body color :
        <input type="text" value={bodycolor} onChange={(e) => setBodycolor(e.target.value)}  />
      </label>
      <br />
      <label>
        Name :
        <input type="text" value={name} onChange={(e) => setName(e.target.value)}  />
      </label>
      <br />
      <label>
        Photo :
        <input type="text" value={photo} onChange={(e) => setPhoto(e.target.value)} />
      </label>
      <br />
      <label>
        Poison :
        <input type="text" value={poison} onChange={(e) => setPoison(e.target.value)} />
      </label>
      <br />
      <label>
      Style :
        <input type="text" value={style} onChange={(e) => setStyle(e.target.value)} />
      </label>
      <br />
      <button type="submit" className='btn-sub'>Submit</button>
    </form>
    </div>
    <br/>
    </div>
    
    
    </>
    
  );
};

export default DataEnter;

