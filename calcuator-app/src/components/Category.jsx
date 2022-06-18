import React from "react";
import { CategoryContainer } from "../styles/Category";
import GridCategory from "./GridCategory";
import InfoMonth from "./InfoMonth";
import Menu from "./Menu";

const Category = () => {
  return (
    <CategoryContainer>
      <h1>Category</h1>
      <Menu />
      <InfoMonth />
      <GridCategory />
    </CategoryContainer>
  );
};

export default Category;
