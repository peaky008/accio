import React,{useState} from 'react'
// let[upd,setUpd]=useState({ad:0,b:0,c:0});
// let oj={ad:0,b:0,c:0};
export default function Obj(){
    const[upd,setUpd]=useState({ad:0,b:0,c:0});
  
   
  
   function change1(){
      setUpd({...upd ,b:upd.b+1});
    console.log(upd);
    //    setUpd({...upd ,b:upd.b+1});
   }
  
   
    // function change(){
        
    //     setUpd(upd+1);
       
       
    //    console.log(upd);
       
    // }
    
    return(
      <div>
        {/* <p>update p value={upd}</p>
        <button onClick={change}>submit</button> */}
        <p>uodate obj value  </p>
        <button onClick={change1}>submit1</button>
      </div>  
    )
}