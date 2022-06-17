import React from "react";
import { GridMainContainer } from "../styles/gridIndex";
import Main from "./Main";
import Sidebar from "./Sidebar";
import SidebarSecondary from "./SidebarSecondary";

const Index = () => {
  return (
    <GridMainContainer className="">
      <Sidebar />
      <Main />
      <SidebarSecondary />
    </GridMainContainer>
  );
};

export default Index;
