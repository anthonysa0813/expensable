import React, { useState } from "react";
import { useEffect } from "react";
import { CalculatorContainer } from "../styles/calculator";
import CalculatorApp from "./CalculatorApp";
import NewCategory from "./NewCategory";

const GridCategory = () => {
  const [showModalCategory, setShowModalCategory] = useState(false);
  const [categoriesArr, setCategoriesArr] = useState([]);
  const token = JSON.parse(sessionStorage.getItem("token"));
  const [showCalculator, setShowCalculator] = useState(false);

  useEffect(() => {
    getCategories().then((res) => {
      setCategoriesArr(res);
    });
  }, []);

  const getCategories = async () => {
    const response = await fetch(
      `https://expensable-api.herokuapp.com/categories`,
      {
        method: "GET",
        headers: { Authorization: `Token token=${token}` },
      }
    );
    const data = await response.json();
    return data;
  };

  const showCalculatorFunc = () => {
    setShowCalculator(!showCalculator);
  };

  return (
    <>
      <div className="gridCategory">
        {categoriesArr.length > 0 &&
          categoriesArr?.map((category) => {
            return (
              <>
                <div
                  className={`categoryCard  border-${category.color}`}
                  key={category.id}
                  onClick={showCalculatorFunc}
                >
                  <div className={`boxIcon background-${category.color}`}>
                    <i
                      className={`icon-${category.icon} color-${category.color}`}
                    ></i>
                  </div>
                  <span>{category.name}</span>
                </div>
                {showCalculator && (
                  <CalculatorContainer>
                    <CalculatorApp
                      setShowCalculator={setShowCalculator}
                      iconCalc={category.icon}
                      theme={category.color}
                      titleCalc={category.name}
                      type={category.transaction_type}
                    />
                  </CalculatorContainer>
                )}
              </>
            );
          })}
        <div
          className="categoryCard "
          onClick={() => setShowModalCategory(!showModalCategory)}
        >
          <i className="icon-plus"></i>
        </div>
      </div>
      {showModalCategory && (
        <NewCategory setShowModalCategory={setShowModalCategory} />
      )}
    </>
  );
};

export default GridCategory;
