import React, { useState } from "react";
import CalculatorApp from "./components/CalculatorApp";
import { CalculatorContainer } from "./styles/calculator";
import "./images/style.css";
import { NavLink } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Main from "./components/Main";
import SidebarSecondary from "./components/SidebarSecondary";
import { GridMainContainer } from "./styles/gridIndex";
import { Routes, Route } from "react-router-dom";
import Index from "./components/Index";
import Login from "./components/Login";
import Register from "./components/Register";
import Category from "./components/Category";
import PrivateRoute from "./components/PrivateRoute";

const App = () => {
  const [showCalc, setShowCalc] = useState(false);
  const showCalculator = () => {
    setShowCalc(!showCalc);
  };
  return (
    <Routes>
      <Route path="/" element={<Index />}>
        <Route
          path="/"
          index
          element={
            <PrivateRoute>
              <Category />
            </PrivateRoute>
          }
        />
        <Route
          path="/transactions"
          element={
            <PrivateRoute>
              <h1>transactions</h1>
            </PrivateRoute>
          }
        />
        <Route
          path="/budgets"
          element={
            <PrivateRoute>
              <h1>budgets</h1>
            </PrivateRoute>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Register />} />
    </Routes>
  );
};

export default App;

// {showCalc && (
//   <CalculatorContainer>
//     <CalculatorApp setShowCalc={setShowCalc} />
//   </CalculatorContainer>
// )}
