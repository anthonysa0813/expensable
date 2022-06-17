import React, { useState, useEffect } from "react";
import { Calculator } from "../styles/calculator";
import check from "../images/check.svg";
import equal from "../images/equal.svg";
import { formatNumber } from "../helper";

const CalculatorApp = ({ setShowCalc }) => {
  const [value, setValue] = useState(0);
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState(null);
  const [showIcon, setshowIcon] = useState(false);
  const [currentOperation, setCurrentOperation] = useState(false);

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

  // useEffect(() => {
  //   console.log({ num1, num2 });
  //   if (num2) {
  //     console.log(`${num1} ${operation} ${num2}`);
  //   }
  //   setValue(`${num1} ${operation} ${num2}`);
  // }, [operation]);

  const handleOperation = (operationName) => {
    // console.log(operationName);
    // setValue(`${value}${operationName}`);
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
      case "÷":
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

  return (
    <Calculator className="">
      <div className="calcHead">
        <h3>jiji</h3>
        <i
          className="icon-close"
          onClick={() => setShowCalc((show) => !show)}
        ></i>
      </div>
      <div className="result ">
        <span className="">
          <i className="icon-dollar"></i>
          {/* {formatNumber(value)} */}
          {value}
        </span>
        <span className="iconOperation">{operation}</span>
      </div>
      <div className="numbersButtons ">
        <div className="numberField">
          <i
            className="icon-divide"
            onClick={() => {
              setOperation("÷");
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
          <i className="icon-rest"></i>
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
          <i
            className="icon-delete"
            onClick={() => {
              setValue(0);
              setNum1(0);
              setOperation(null);
            }}
          ></i>
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
          <i className="icon-calendar"></i>
        </div>
        <div className="numberField" onClick={() => handleNumber(0)}>
          <span>0</span>
        </div>
        <div className="numberField " onClick={() => addPoint()}>
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
