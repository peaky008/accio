import React, { useState } from 'react'
export default function Area(){
   let[lat,setLat]=useState(0)
   let[lon,setLon]=useState(0)
   let[hemi,setHemi]=useState("")
   let[ses,setSes]=useState()
    function displ(){
        if(navigator.geolocation){
           console.log(navigator.geolocation.getCurrentPosition(
            (nn)=>{
                console.log(nn.coords.latitude)
                setLat(nn.coords.latitude)
                setLon(nn.coords.longitude)
                 if(nn.coords.latitude>0){
                    setHemi("asian")
                 }
                 else if(nn.coords.latitude<0){
                    setHemi("outside asian")
                 }
                 else{
                    setHemi("equator")
                 }

            }
           )) 
        }
        function season(){
            let date=new Date()
            let ans=date.getMonth()
            if(ans>=0 && ans<=6){
                setSes("summer")
            }
            else if(ans>=6 && ans<=11){
                setSes("winter")
            }
            else{
                setSes("no season")

            }
        }
        season()
                
        // console.log(navigator.geolocation.getCurrentPosition(showposition))
    //    navigator.geolocation.getCurrentPosition
     
        } 
    
    return(
        <>
        <h1>session:{ses}</h1>
        <h1>latitude:{lat}</h1>
        <h1>longitude:{lon}</h1>
        <h1>hemisphere:{hemi}</h1>

        <button onClick={displ}>show</button>
        </>
    )
}