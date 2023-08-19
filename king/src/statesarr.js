import React,{useState} from 'react'
export default function Arr(){
   let[up,setUp]=useState(["mango","orange","banana"])
   let[adj,setAdj]=useState("")
   let[clr,setClr]=useState()
   function display(){
    // console.log([...up,adj])
    setUp([...up,adj])
    setClr("")
    

   }
   function content(e){
    setAdj(e.target.value)
    

   }
    return(

        <>
        <input type="text"  onChange={content} value={clr}/> 
        <button onClick={display}>add</button>
         <p>{up}</p>
        {/* {
            // <p>{up}</p>
            up.map((element)=>{
                <p>{element}</p>
            })
        } */}
        </>
    )
}