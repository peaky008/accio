import React,{useState} from 'react'
export default function Asystate(){
  let[count,setCount]=useState(0);
 
  
  function increase(){
    // here,below we are passing just value thats reason it is increasing the 1.
    // setCount(count+1);
    // setCount(count+2)

    // here,below callback function is created in heap memory,so only value is getting updated
    setCount((count)=>count+1)
    setCount((count)=>count+2)
 
  }
  
    return(
        <>
        <p>the count is ={count}</p>
     
        <button onClick={increase}>add</button>
        </>
    )
}