import React from "react";
import { MenuContainer } from "../styles/Menu";

const Menu = () => {
  return (
    <MenuContainer className="">
      <nav>
        <ul className="">
          <li>
            <i className="icon-minus-circle"></i>
            Expenses
          </li>
          <li>
            <i className="icon-plus-circle"></i>
            Income
          </li>
        </ul>
      </nav>
    </MenuContainer>
  );
};

export default Menu;
