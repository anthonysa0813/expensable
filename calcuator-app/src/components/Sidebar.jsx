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
            <NavLink to="/">
              <i className="icon-categories mr-1"></i>
              Categories
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions">
              <i className="icon-transactions mr-1"></i>
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/budgets">
              <i className="icon-budgets mr-1"></i>
              Budgets
            </NavLink>
          </li>
        </ul>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
