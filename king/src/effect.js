 
import React,{useState,useEffect} from 'react'
 
export default function Control(){
    let[gd ,setGd]=useState(0)
    let[sl ,setSl]=useState(0)
    let[br ,setBr]=useState(0)
   function increase0(){
       setGd(gd+1);
   }
   function increase1(){
    setSl(sl+1)
   }
   function increase2(){
   setBr(br+1);
   }
   useEffect(()=>{
    document.title=`gold:${gd}|silver:${sl}|bronze:${br}`;
   },[gd,sl,br]
//     

   )
   
    return(
        <>
        <h1>gold:{gd}|silver:{sl}|bronze:{br}</h1>
        <button onClick={increase0}>gold</button>
        <button onClick={increase1}>silver</button>
        <button onClick={increase2}>bronze</button>
        </>
    )
}