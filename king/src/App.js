import React,{useState} from 'react'
// import logo from './logo.svg';
import './App.css';
// import Topic from './staet';
// import Obj from './stateobj';
// import Form from './form';
// import Arr from './statesarr';
// import Asystate from './asyncsstate';
// import Names from './movie';
// import Validation from './formvalidation';
// import Navbar from './navbar';
// import Info from './info';
// import Middle from './middle';
// import Footer from './footer';
// import Control from './effect';
// import Area from './location';
import Store from './show';
// import Login from './login';
// import Profile from './profile';



function App() {
  //   const [userId, setUserId] = useState(null);

  // const handleLogin = id => {
  //   setUserId(id);
  // };
  return (
    <>
    <Store/> 
    {/* <Arr/> */}
    {/* <Asystate/> */}
    {/* <Names/> */}
    {/* <Control/> */}
    {/* <Area/> */}
    {/* <Validation/> */}
    {/* <Topic />
    <Obj /> */}
    {/* <Form/> */}
    {/* <Navbar/>
    <Info/>
    <Middle head="career" content="Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen in the history of the sport, he plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket."/>
    <Middle head="project" content="Virat Kohli is an Indian international cricketer and the former captain of the Indian national cricket team. Widely regarded as one of the greatest batsmen in the history of the sport, he plays for Royal Challengers Bangalore in the IPL and Delhi in domestic cricket."/>
    <Footer/> */}
 {/* <div className="App">
     {!userId ? <Login onLogin={handleLogin} /> : <Profile userId={userId} />}
   </div> */}
    </>
  );
}

export default App;
// //   const [userId, setUserId] = useState(null);

//   const handleLogin = id => {
//     setUserId(id);
//   };

//   return (
//     <div className="App">
//       {!userId ? <Login onLogin={handleLogin} /> : <Profile userId={userId} />}
//     </div>
//   );
// }