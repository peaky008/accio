import React,{useState} from 'react'
export default function Store({ onLogin }){
let[usernameState,setUsernameState]=useState("");
let[passwordState,setPasswordState]=useState("");
   function display(){
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    username:{usernameState},
    password:{passwordState},
  })
})
// .then(res => res.json())
.then(res => {
  if (res.status === 200) {
    return res.json();
  } else {
    throw new Error('Invalid credentials');
  }
})
.then(data => {
  localStorage.setItem('user', JSON.stringify(data));
  onLogin(data.id);
})
  
} 
    return(
        <>
        <input type='text'
        onClick={e=>{setUsernameState(e.target.value)}} />
        <input type='password' 
         onClick={e=>{setPasswordState(e.target.value)}} />
        <button onClick={display}>show</button>
        </>
    )
}