import React, { useEffect, useState } from "react";
import { LoginContainer } from "../styles/Login";
import { Link } from "react-router-dom";
import useLogin from "../hooks/useLogin";
import useFetch from "../hooks/useFetch";
const Login = () => {
  const { user, setUser, error, setError, handleChange, handleSubmit } =
    useLogin({ email: "", password: "" });

  return (
    <LoginContainer className="">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <div className="field">
            <label htmlFor="email">EMAIL</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="example@gmail.com"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label htmlFor="password">PASSWORD</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*******"
              onChange={handleChange}
            />
          </div>
          <button type="submit">LOGIN</button>
          <Link to="/signup" className="pink-300">
            Sign up
          </Link>
        </form>
      </div>
    </LoginContainer>
  );
};

export default Login;
