import React,{useState} from 'react'
 
export default function Form(){
let[trans,setTrans]=useState()
 
//    function diff(trans1){
//        trans1.toUpperCase();
//    }
   
    function text(event){
        // console.log(event.target.value)
        setTrans(event.target.value);
    }
    

    // function update(uuu){
    //    diff(trans.toUpperCase())
    // }
    
    return(
        <div>
            <input type="text"  onChange={text}/>
            {/* <input type="text" /> */}
             
            
            <p>{trans}</p>
           {/* <button onClick={dis}>uu</button> */}
            

            
        </div>
    )
}