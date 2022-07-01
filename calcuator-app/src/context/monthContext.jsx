import { useState } from "react";
import { createContext } from "react";

// va a tener las funciones y estados
export const monthContext = createContext();

const MonthProvider = ({ children }) => {
  const [globalMonth, setGlobalMonth] = useState("");

  return (
    <monthContext.Provider value={{ globalMonth, setGlobalMonth }}>
      {children}
    </monthContext.Provider>
  );
};

export default MonthProvider;

// const Alerta = ({children, type_alert}) => {
//   <div className={type_alert}>
//     <p>{children}</p>
//   </div>
// }
