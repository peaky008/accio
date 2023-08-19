import React, { useState } from 'react'
let film=[
    {title:"vikrant rona",actor:"kiccha",year:2021,arr:["abc","xyz"]},
    {title:"pailwaan",actor:"kiccha sudeep",year:2019,arr:["abc","xyz"]},
    {title:"kotigobba",actor:"abinaya chakravarti",year:2020,arr:["abc","xyz"]}
]
export default function Names(){
    let[extract,setExtract]=useState("");
    console.log(extract);
   
    return(
        <>
        {
            film.map((event)=>{
                return(
                    <div>
                        <h1 onClick={()=>setExtract(event)}> this is {event.title}</h1>
                    </div>   
                )      
            })
        }
        {/* {
        <div style={{
            backgroundColor:"black",
            color:"white"
        }}>
        <h1>{extract.actor}</h1>
        <h1>{extract.year}</h1>
        <h1>{extract.arr.join(",")}</h1>
        </div>} */}
          {extract && (
        <div style={{ backgroundColor: "black", color: "white" }}>
          <h1>{extract.actor}</h1>
          <h1>{extract.year}</h1>
          <h1>{extract.arr.join(",")}</h1>
        </div>
      )}
          {/* <h1>{extract.actor}</h1> */}
        </>
    )
}