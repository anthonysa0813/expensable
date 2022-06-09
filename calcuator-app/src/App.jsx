import React, { useState } from "react";
import CalculatorApp from "./components/CalculatorApp";
import { CalculatorContainer } from "./styles/calculator";
import "./images/style.css";

const App = () => {
  const [showCalc, setShowCalc] = useState(false);
  const showCalculator = () => {
    setShowCalc(!showCalc);
  };
  return (
    <div>
      <button onClick={() => showCalculator()}>calculator</button>
      {showCalc && (
        <CalculatorContainer>
          <CalculatorApp setShowCalc={setShowCalc} />
        </CalculatorContainer>
      )}
    </div>
  );
};

export default App;
