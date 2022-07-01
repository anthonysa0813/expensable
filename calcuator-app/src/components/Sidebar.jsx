import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { UserContext } from "../context/UserContext";
import logo from "../images/logo.svg";
import { SidebarContainer } from "../styles/gridIndex";

const Sidebar = () => {
  const { userObj, setUserObj } = useContext(UserContext);
  const { email, first_name, last_name } = userObj;
  const token = JSON.parse(sessionStorage.getItem("token"));
  const url = "https://expensable-api.herokuapp.com//";
  const logout = async () => {
    console.log(`${url}logout`);

    fetch(`${url}logout`, {
      method: "DELETE",
      headers: {
        Authorization: `Token token=${token}`,
      },
    }).then((response) => {
      if (response.status == 204) {
        setUserObj({});
        sessionStorage.removeItem("token");
      }
    });
  };
  useEffect(() => {}, [logout]);

  return (
    <SidebarContainer className="">
      <div className="topSidebar">
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
      </div>
      <div className="downSidebar ">
        <h5 className="title">{`${first_name} ${last_name}`}</h5>
        <p className="email">{`${email}`}</p>
        <button onClick={logout}>Logout</button>
      </div>
    </SidebarContainer>
  );
};

export default Sidebar;
