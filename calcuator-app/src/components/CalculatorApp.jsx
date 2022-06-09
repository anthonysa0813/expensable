import React, { useState } from "react";
import { Calculator } from "../styles/calculator";
import check from "../images/check.svg";
import equal from "../images/equal.svg";

const CalculatorApp = ({ setShowCalc }) => {
  const [value, setValue] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState(null);
  const [showIcon, setshowIcon] = useState(false);

  const handleNumber = (num) => {
    if (value == 0) {
      setValue(num);
      setshowIcon(true);
    }
    if (operation == null) {
      setValue(String(value + num));
      setNum1(String(value + num));
    }
    if (operation !== null) {
      setValue(String(`${value} ${operation} ${num}`));
      setNum2(String(num2 + num));
    }
  };

  const handleOperation = (operationName) => {
    // console.log(operationName);
    // setValue(`${value}${operationName}`);
    setOperation(operationName);
  };

  const handleResult = () => {
    let currentValue;
    switch (operation) {
      case "+":
        currentValue = Number(num1) + Number(num2);
        setNum1(currentValue);
        setNum2(0);
        setValue(currentValue);
        // setNum1(currentValue);
        break;
      case "-":
        currentValue = Number(num1) - Number(num2);
        setNum1(currentValue);
        setNum2(0);
        setValue(currentValue);
        // setNum1(currentValue);
        break;

      default:
        break;
    }
  };

  return (
    <Calculator className="">
      <div className="calcHead">
        <h3>jiji</h3>
        <i
          className="icon-close"
          onClick={() => setShowCalc((show) => !show)}
        ></i>
      </div>
      <div className="result">
        <span>
          <i className="icon-dollar"></i>
          {value}
        </span>
      </div>
      <div className="numbersButtons ">
        <div className="numberField">
          <i className="icon-divide"></i>
        </div>
        <div className="numberField" onClick={() => handleNumber(1)}>
          <span>1</span>
        </div>
        <div className="numberField" onClick={() => handleNumber(2)}>
          <span>2</span>
        </div>
        <div className="numberField" onClick={() => handleNumber(3)}>
          <span>3</span>
        </div>
        <div className="numberField">
          <i className="icon-rest"></i>
        </div>
        <div className="numberField">
          <i className="icon-close"></i>
        </div>
        <div className="numberField" onClick={() => handleNumber(4)}>
          <span>4</span>
        </div>
        <div className="numberField" onClick={() => handleNumber(5)}>
          <span>5</span>
        </div>
        <div className="numberField" onClick={() => handleNumber(6)}>
          <span>6</span>
        </div>
        <div className="numberField">
          <i className="icon-delete"></i>
        </div>
        <div className="numberField" onClick={showIcon && handleResult}>
          <i
            className="icon-minus"
            onClick={() => {
              setOperation("-");
            }}
          ></i>
        </div>
        <div className="numberField" onClick={() => handleNumber(7)}>
          <span>7</span>
        </div>
        <div className="numberField" onClick={() => handleNumber(8)}>
          <span>8</span>
        </div>
        <div className="numberField" onClick={() => handleNumber(9)}>
          <span>9</span>
        </div>
        <div className="numberField" onClick={() => handleOperation("+")}>
          <i className="icon-plus"></i>
        </div>
        <div className="numberField">
          <i className="icon-calendar"></i>
        </div>
        <div className="numberField" onClick={() => handleNumber(0)}>
          <span>0</span>
        </div>
        <div className="numberField">
          <i className="icon-point"></i>
        </div>
        <div className="numberField check" onClick={showIcon && handleResult}>
          {showIcon ? <img src={equal} alt="" /> : <img src={check} alt="" />}
        </div>
      </div>
      <div className="footer"></div>
    </Calculator>
  );
};

export default CalculatorApp;
