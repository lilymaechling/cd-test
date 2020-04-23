import React from 'react';
import logo from './calendar.png';
import './App.css';

function App() {
  return (
    <div className="all">
    <div className="dartCalLogo">
      DartCal
      <div><img width="80px" src={logo}/></div>
    </div>
    <div className="displaySignInInfoContainer">
      <div className="displaySignInInfo">
        <div className="signInBox">
          <div className="prompt"> Username: </div>
            <input className="response" id="emailInputBar" placeholder="Username"  />
          <div className="prompt"> Password: </div>
            <input type="password" className="response" id="passwordInput" placeholder="Password"  />
        </div>
        <div>
        <button className="signupButtons" id="createButton" >Log In</button>
      </div>
    </div>
  </div>
  </div>
  );
}

export default App;
