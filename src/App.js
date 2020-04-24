import React from 'react';
import logo from './calendar.png';
import './App.css';

function App() {
  return (
    <div className="all">
      <div className="dartCalLogo">
        DartCal
        <div className="scheduleLogo"><img width="90px" src={logo}/></div>
      </div>
      <div className="signInBox1">
        <div className="prompt"> Username: </div>
        <input className="response" id="emailInputBar" placeholder="Username"  />
      </div>
      <div className="signInBox2">
        <div className="prompt"> Password: </div>
        <input type="password" className="response" id="passwordInput" placeholder="Password"  />
      </div>
      <div>
        <button className="signupButtons" id="createButton" >Log In</button>
      </div>
    </div>
  );
}

export default App;
