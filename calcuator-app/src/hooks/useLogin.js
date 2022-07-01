import React, { useState } from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

const useLogin = (initialState = {}) => {
  const { userObj, setUserObj } = useContext(UserContext);

  const [user, setUser] = useState(initialState);
  const { email, password } = user;
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ user });
    if (Object.values(user).includes("")) {
      console.log("Please enter your email and password buhh");
      setError(true);
      return;
    }
    setError(false);
    const url = "https://expensable-api.herokuapp.com/";

    const login = async (user) => {
      const response = await fetch(`${url}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });
      const data = await response.json();
      console.log(data);
      setUserObj(data);
      return data;
    };
    login(user)
      .then((res) => {
        if (res.token) {
          console.log(res.token);
          sessionStorage.setItem("token", JSON.stringify(res.token));
          navigate("/");
          console.log(navigate("/"));
        }
      })
      .catch((err) => console.log(err));
  };

  return {
    user,
    setUser,
    error,
    setError,
    handleChange,
    handleSubmit,
  };
};

export default useLogin;
