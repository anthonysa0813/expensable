import React, { useState, useEffect } from "react";
import { Calculator } from "../styles/calculator";
import check from "../images/check.svg";
import equal from "../images/equal.svg";
import { formatNumber } from "../helper";
import { createTransactionFunc } from "../helper/createTransaction";

const CalculatorApp = ({
  setShowCalculator,
  iconCalc,
  theme,
  titleCalc,
  type,
  category,
}) => {
  const [value, setValue] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState(null);
  const [showIcon, setshowIcon] = useState(false);
  const [currentOperation, setCurrentOperation] = useState(false);

  const { color, icon, id, name, transaction_type } = category;
  const token = sessionStorage.getItem("token");
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
      setValue(String(num2 + num));
      setNum2(String(num2 + num));
    }
  };

  const handleOperation = (operationName) => {
    setOperation(operationName);
  };

  const restNum = () => {
    // String(number).slice(number.length - 1, -1);
    if (operation == null && num2 == 0) {
      const result = String(num1).slice(Number(num1).length - 1, -1);
      setNum1(Number(result));
      setValue(Number(result));
    }

    if (operation && num2) {
      const result = String(num2).slice(Number(num2).length - 1, -1);
      setNum2(Number(result));
      setValue(Number(result));
    }
  };

  const addPoint = () => {
    if (operation == null && num2 == 0) {
      const result = num1 + ".";
      setNum1(result);
      setValue(result);
    }

    if (operation && num2) {
      const result = num2 + ".";
      setNum2(result);
      setValue(result);
    }
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
      case "x":
        currentValue = Number(num1) * Number(num2);
        setNum1(currentValue);
        setNum2(0);
        setValue(currentValue);
        // setNum1(currentValue);
        break;
      case "??":
        currentValue = Number(num1) / Number(num2);
        setNum1(currentValue);
        setNum2(0);
        setValue(currentValue);
        // setNum1(currentValue);
        break;
      default:
        break;
    }
  };

  const createTransaction = async () => {
    await createTransactionFunc(id, value, token);
    setShowCalculator(false);
  };

  return (
    <Calculator className="">
      <div className={`calcHead background-${color} `}>
        <div className="infoHead ">
          <div className={`boxIcon  border-radius-50 p-2`}>
            <i className={`icon-${icon}`} style={{ color: color }}></i>
          </div>
          <div className="boxTitle">
            <h4>Add {transaction_type} to</h4>
            <h3>{name}</h3>
          </div>
        </div>
        <i
          className="icon-close"
          onClick={() => setShowCalculator((show) => console.log(show))}
        ></i>
      </div>
      <div className="result ">
        <span className="">
          {/* {formatNumber(value)} */}
          <i className="icon-dollars"></i>
          {value}
        </span>
        <span className="iconOperation">{operation}</span>
      </div>
      <div className="numbersButtons ">
        <div className="numberField">
          <i
            className="icon-divide"
            onClick={() => {
              setOperation("??");
            }}
          ></i>
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
        <div className="numberField" onClick={() => restNum()}>
          <i className="icon-reset2"></i>
        </div>
        <div className="numberField">
          <i
            className="icon-close"
            onClick={() => {
              setOperation("x");
            }}
          ></i>
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
          <span
            className=""
            onClick={() => {
              setValue(0);
              setNum1(0);
              setOperation(null);
            }}
          >
            C
          </span>
        </div>
        <div className={`numberField `} onClick={showIcon && handleResult}>
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
        <div
          className={`numberField ${currentOperation && "currentOp"}`}
          onClick={() => {
            handleOperation("+");
          }}
        >
          <i className="icon-plus"></i>
        </div>
        <div className="numberField">
          <i className="icon-date"></i>
        </div>
        <div className="numberField" onClick={() => handleNumber(0)}>
          <span>0</span>
        </div>
        <div className="numberField " onClick={() => addPoint()}>
          <span>.</span>
        </div>
        <div
          className={`numberField check background-${color}`}
          onClick={showIcon && handleResult}
        >
          {num2 ? (
            <img src={equal} alt="" />
          ) : (
            <img src={check} alt="" onClick={createTransaction} />
          )}
        </div>
      </div>
      <div className="footer"></div>
    </Calculator>
  );
};

export default CalculatorApp;
