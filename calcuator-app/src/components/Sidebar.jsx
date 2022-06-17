import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/logo.svg";
import { SidebarContainer } from "../styles/gridIndex";
const Sidebar = () => {
  return (
    <SidebarContainer className="">
      <div className="logoContainer">
        <img src={logo} alt="" />
      </div>
      <div className="nav ">
        <ul>
          <li>
            <NavLink to="/">Categories</NavLink>
          </li>
          <li>
            <NavLink to="/transactions">Transactions</NavLink>
          </li>
          <li>
            <NavLink to="/budgets">Budgets</NavLink>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
