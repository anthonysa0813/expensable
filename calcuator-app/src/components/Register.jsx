import React from "react";
import { LoginContainer, RegisterContainer } from "../styles/Login";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <LoginContainer>
      <div className="wrapper">
        <form className="">
          <h1>Sign Up</h1>
          <div className="field">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="field">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" placeholder="*******" />
          </div>
          <div className="field">
            <label htmlFor="name">FIRST NAME</label>
            <input type="text" id="name" placeholder="John" />
          </div>
          <div className="field">
            <label htmlFor="lastname">LAST NAME</label>
            <input type="text" id="lastname" placeholder="Doe" />
          </div>
          <div className="field">
            <label htmlFor="phone">PHONE</label>
            <input type="tel" id="phone" placeholder="987654321" />
          </div>
          <button type="button">SIGN UP</button>
          <Link to="/login" className="pink-300">
            Login
          </Link>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Register;
