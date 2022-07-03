import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { monthContext } from "../context/monthContext";
import { getApi } from "../hooks/getFetch";
import Input, { SidebarSecondContainer } from "../styles/sidebarSecondary";
import ListTransactions from "./ListTransactions";
import Checkbox from "./Checkbox";


const SidebarSecondary = () => {
  const [categories, setCategories] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const { globalMonth, setGlobalMonth } = useContext(monthContext);
  const [currentTransactions, setCurrentTransactions] = useState([]);

  //  solo se va a ejecutar una única vez cuando se renderiza por primera vez
  useEffect(() => {
    codeBlock();
  }, []);

  const codeBlock = async () => {
    const response = await getApi(
      `https://expensable-api.herokuapp.com/categories`
    );
    const data = await response;
    setCategories(data);
    const arr = [];
    const arrTransactions = categories.forEach((category) => {
      const { name, color, icon } = category;
      const transCategory = category.transactions.forEach((t) => {
        const { amount } = t;
        const transaction = {
          name,
          color,
          icon,
          amount,
        };
        arr.push(transaction);
      });
      return transCategory;
    });

    setTransactions([...transactions, ...arr]);
  };

  useEffect(() => {
    getApi(`https://expensable-api.herokuapp.com/categories`).then((res) =>
      setCategories(res)
    );

    if (categories.length > 0) {
      const arr = [];
      const arrTransactions = categories.forEach((category) => {
        const { name, color, icon } = category;
        const transCategory = category.transactions.forEach((t) => {
          const { amount, date } = t;
          const transaction = {
            name,
            color,
            icon,
            amount,
            date,
          };
          arr.push(transaction);
        });
        return transCategory;
      });
      console.log(arr);
      setTransactions([...transactions, ...arr]);
    }
  }, [globalMonth]);

  //esto es lo de checkbox, pero no sé como incluirlo sin romper todo el código:
   
    //const categories =[
      //{name: "Rent"},
      //{name: "Salary"},
      //{name: "Transport"},
      //{name: "Education"},
      //{name: "Groceries"},
      //{name: "Gifts"},
    //]


    //function Filters(){
      //return(
        //<CheckBoxGroups title="Category" checkboxes={categories}/>
      //);
    //}



  return (
   <SidebarSecondContainer className="debug">
      <div className="transactionHead ">
        <h2>Transactions</h2>
        <i className="icon-filter"></i>
          <div className="showFilters">
            <h4>Category</h4>
            <Checkbox name="cats" label ="Rent"/>
            <Checkbox name="cats" label ="Salary"/>
            <Checkbox name="cats" label ="Transport"/>
            <Checkbox name="cats" label ="Education"/>
            <Checkbox name="cats" label ="Groceries"/>
            <Checkbox name="cats" label ="Gifts"/>
          </div>
          <div className="Amount">
            <Input label="min" name ="min-amount"/>
            <Input label="max" name="max-amount"/>
          </div>
          <div className="Dates">
            <h4>Date</h4>
            <Input label="from" type= "date"/>
            <Input label="to" type= "date"/>
          </div>
      </div>
      <ListTransactions
        arrTransactions={transactions}
        globalMonth={globalMonth}
      />
    </SidebarSecondContainer>
  );
};

export default SidebarSecondary;
