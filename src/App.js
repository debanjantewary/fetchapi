import './App.css';
//import { BrowserRouter, Route, Link } from "react-router-dom";
import Fetchintro from "./Fetch";
import UserData from "./Getdata";
import React from 'react';

function App() {
  return (
    <div className="App">
   
        
        <Fetchintro/>
        <UserData/>

        <h3>Created By:</h3>
     <code>.Debanjan_Tewary()</code>

        <h3>API:</h3>
     <code>https://api.randomuser.me/</code>
     </div>
  );
}

export default App;
