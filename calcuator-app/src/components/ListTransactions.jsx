import React, { useEffect } from "react";
import { useState } from "react";

const ListTransactions = ({ arrTransactions, globalMonth }) => {
  const [transactions, setTransactions] = useState(arrTransactions);
  const [arrDataByMonth, setArrDataByMonth] = useState([]);

  useEffect(() => {
    const ArrByMonth = arrTransactions.filter((transaction) => {
      const date = new Date(transaction.date).getMonth(); //6
      if (globalMonth == date) {
        return transaction;
      }
    });
    setArrDataByMonth(ArrByMonth);
  }, [globalMonth]);

  return (
    <div>
      {arrDataByMonth.map((transaction) => {
        return <div>nombre: {transaction.name}</div>;
      })}
    </div>
  );
};

export default ListTransactions;
