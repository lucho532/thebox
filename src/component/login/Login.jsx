import React from "react";
import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="login-container">
        <div className="youCan">
          <h2>What can us do for you?</h2>
          <p>
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </p>
        </div>
        <div className="form">
          <input type="text" placeholder="Your Name*" className="input1" />
          <input type="text" placeholder="Email*" className="input2" />
          <input
            type="text"
            placeholder="Reason for Contacting*"
            className="input3"
          />
          <input type="text" placeholder="Phone" className="input4" />
          <input
            type="text"
            placeholder="Message"
            className="input input-message"
          />
          <p className="p-message">* indicates a required field</p>
        </div>
        <div className="enviar">Submit</div>
      </div>
    </div>
  );
};

export default Login;
