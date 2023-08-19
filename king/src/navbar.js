import React from 'react'
// import './navbar.css';
export default function Navbar(){
    return(
        <>
        <div style={{
            backgroundColor:'black',
            color:'white',
            padding:'10px'
            
        }}>
          <ul style={{display:'flex',
                      justifyContent:'space-between',
                      listStyle:'none'
                      
                      
                        }}>
            <li>home</li>
            <li>about</li>
            <li>contact</li>
            <li>more details</li>
          </ul>
        </div>
        </>
    )
}