import React from 'react'
import "./App.css";


function Fetchintro(){
return (
    <div className="intro-div">
        <h2 className="intro">Profile API Fetch: </h2>
        <button className="getbtn" onClick={() => window.location.reload(true)}>Generate!</button>

    </div>
    )
}   

export default Fetchintro;
