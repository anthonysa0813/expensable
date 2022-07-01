import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import "./images/icons/style.css";
import UserProvider from "./context/UserContext";
import MonthProvider from "./context/monthContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <MonthProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MonthProvider>
    </React.StrictMode>
  </BrowserRouter>
);
