import React, { useContext, useState } from "react";
import { monthContext } from "../context/monthContext";
import { months } from "../helper/monthsArr";
import { InfoMonthContainer } from "../styles/infoMonth";

const InfoMonth = () => {
  const [currentMonthNum, setCurrentMonthNum] = useState(new Date().getMonth());
  const { setGlobalMonth } = useContext(monthContext);

  const nextMonth = () => {
    setCurrentMonthNum(currentMonthNum + 1);
    setGlobalMonth(currentMonthNum + 1);
  };

  const previousMonth = () => {
    setCurrentMonthNum(currentMonthNum - 1);
    setGlobalMonth(currentMonthNum - 1);
  };

  return (
    <InfoMonthContainer className="">
      <div className="infoMonths">
        <div className="iconContainer" onClick={previousMonth}>
          <i className="icon-previous"></i>
        </div>
        <div className="monthContent">
          <span>{months[currentMonthNum]} 2022</span>
        </div>
        <div className="iconContainer" onClick={nextMonth}>
          <i className="icon-next"></i>
        </div>
      </div>
      <div className="infoExpense">
        <span className="price">${1250}</span>
        <p>Total Expenses</p>
      </div>
    </InfoMonthContainer>
  );
};

export default InfoMonth;
