import React from 'react'
import pic from './pic.jpg';
export default function Info(){
    return(
        <>
        <div style={{
            textAlign:'center',
             
            border:'2px solid green'
        }}>
             <h3 style={{
                fontSize:'40px',
                marginTop:'-10px'
             }}>profile</h3>
         <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk8HpDrYnaODtnghczDBs0f4Nalq_chptAbA&usqp=CAU' style={{
            marginTop:'-30px'
         }}/> 
         
           <p>Virat Kohli was born on 5 November 1988 in Delhi into a Punjabi Hindu family. His father, Prem Kohli, worked as a criminal lawyer and his mother, Saroj Kohli, served as a housewife. He has an older brother, Vikas, and an older sister, Bhawna. Kohli's formative years were spent in the Uttam Nagar and commenced his early education at Vishal Bharti Public School. According to his family, Kohli exhibited an early affinity for cricket as a mere three-year-old. He would pick up a cricket bat, display natural skill, and request his father to bowl to him.</p>
        </div>
        
        </>
    )
}