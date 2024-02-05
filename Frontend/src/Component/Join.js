import React from 'react'
import './Join.css'
import logo from '../Images/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react';


export let user;
export default function Join() {

    const [name, setName] = useState("");
    console.log(name);

     let user;

    const sendUser = ()=>{
        user = document.getElementById('JoinInput').value;
        // document.getElementById('JoinInput').value = "";
    }

  return (
    <div className='JoinPage'>
      <div className='JoinContainer'>
      <img src={logo} alt='logo' />
        <h1>C CHAT</h1>
        <input onChange={(e)=>setName(e.target.value)} type='text' id='JoinInput' placeholder='Enter Your Name' />
        <Link onClick={(event)=>!name ? event.preventDefault() : null} to='/chat'><button onClick={sendUser} className='Joinbtn'>Login In</button></Link>
      </div>
    </div>
    
  )
  
};

