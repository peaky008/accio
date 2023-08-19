import React from 'react'
// export default function Middle({head,content}){
    // above way is destructuring ,we can pass props like that use is for instead of using {'props.head} ,we can use head only;
    export default function Middle(props){
    return(
      
        <>
        <div style={{
            border:'2px solid green',
            marginTop:'0px',
            textAlign:'center'
        }}>
         <h1>{props.head}</h1>
         <p>{props.content}</p>
         {/* <h1>{head}</h1>
         <p>{content}</p> */}
         
      
       

        </div>
        </>
    )
}