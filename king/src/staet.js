import React,{useState} from 'react'
let a=10; 
export default function Topic(){
    let[upd,setUpd]=useState(0);
   
  
   function change1(){
      a=a+1;
      console.log(a);
   }
    function change(){
        
        setUpd(upd+1);
       
       
       console.log(upd);
       
    }
    
    return(
      <div>
        <p>update p value={upd}</p>
        <button onClick={change}>submit</button>
        <p>uodate a value={a}</p>
        <button onClick={change1}>submit1</button>
      </div>  
    )
}