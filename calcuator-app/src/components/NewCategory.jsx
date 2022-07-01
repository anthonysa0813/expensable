import React, { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { colorsObject } from "../helper/colorsArr";
import { NewCategoryContainer } from "../styles/newCategory";
import Message from "./Message";

const NewCategory = ({ setShowModalCategory }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [colorName, setColorName] = useState("");
  const [icon, setIcon] = useState("");
  const [error, setError] = useState(false);
  const [activeColor, setActiveColor] = useState({
    active: false,
    color: "",
  });
  const { userObj } = useContext(UserContext);
  const { id } = userObj;
  const token = JSON.parse(sessionStorage.getItem("token"));
  const url = `https://expensable-api.herokuapp.com/`;

  const handleClick = () => {
    setShowModalCategory((modalCategory) => {
      return !modalCategory;
    });
  };
  const changeColor = (color) => {
    setColor(colorsObject(color));
    setColorName(color);
    setActiveColor({
      active: true,
      color,
    });
  };

  const changeIcon = (icon) => {
    console.log(icon);
    setIcon(icon);
  };

  const categorySubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !icon.trim() || !color.trim()) {
      setError(true);
      return;
    }
    console.log({
      name: name,
      transaction_type: 0,
      user_id: id,
      created_at: "06/18/2022",
      updated_at: "06/18/2022",
      color: colorName,
      icon: icon,
      token,
    });

    const response = await fetch(`${url}categories`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token token=${token}`,
      },
      body: JSON.stringify({
        name: name,
        transaction_type: 0,
        user_id: id,
        created_at: "06/18/2022",
        updated_at: "06/18/2022",
        color: colorName,
        icon: icon,
      }),
    });
    const data = await response.json();
    return data;
  };

  return (
    <NewCategoryContainer className="">
      <div className="wrapper">
        <div className="newCateCard ">
          <div className="menu ">
            <h3>New Category</h3>
            <i className="icon-close" onClick={handleClick}></i>
          </div>
          <form onSubmit={categorySubmit}>
            {error && (
              <Message message="All fields are required" type="danger" />
            )}
            <label htmlFor="name">NAME</label>
            <input
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            <h3>COLOR</h3>
            <div className="colorsCategory ">
              <div
                className={`circle-color red ${
                  activeColor.color == "red" ? `activeBorder` : ""
                }`}
                onClick={() => changeColor("red")}
              ></div>
              <div
                className={`circle-color orange  ${
                  activeColor.color == "orange" ? `activeBorder` : ""
                }`}
                onClick={() => changeColor("orange")}
              ></div>
              <div
                className={`circle-color yellow ${
                  activeColor.color == "yellow" ? `activeBorder` : ""
                } `}
                onClick={() => changeColor("yellow")}
              ></div>
              <div
                className={`circle-color green  ${
                  activeColor.color == "green" ? `activeBorder` : ""
                }`}
                onClick={() => changeColor("green")}
              ></div>
              <div
                className={`circle-color teal ${
                  activeColor.color == "teal" ? `activeBorder` : ""
                } `}
                onClick={() => changeColor("teal")}
              ></div>
              <div
                className={`
                  circle-color cyan  ${
                    activeColor.color == "cyan" ? `activeBorder` : ""
                  } 
                `}
                onClick={() => changeColor("cyan")}
              ></div>
              <div
                className={`
                  circle-color light-blue ${
                    activeColor.color == "light-blue" ? `activeBorder` : ""
                  }
                `}
                onClick={() => changeColor("light-blue")}
              ></div>
              <div
                className={`circle-color blue ${
                  activeColor.color == "blue" ? `activeBorder` : ""
                }`}
                onClick={() => changeColor("blue")}
              ></div>
            </div>
            <h3>ICON</h3>
            <div className="iconsCategory ">
              <div
                className={`circle-icon ${
                  icon == "icon-rent" ? "activeIconBorder" : ""
                }`}
              >
                <i className="icon-rent" onClick={() => changeIcon("bill")}></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-groceries" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-groceries"
                  onClick={() => changeIcon("cart")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-health" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-health"
                  onClick={() => changeIcon("health")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-play" ? "activeIconBorder" : ""
                }`}
              >
                <i className="icon-play" onClick={() => changeIcon("game")}></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-educ" ? "activeIconBorder" : ""
                }`}
              >
                <i className="icon-educ" onClick={() => changeIcon("bank")}></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-education2" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-education2"
                  onClick={() => changeIcon("education")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-cart" ? "activeIconBorder" : ""
                }`}
              >
                <i className="icon-cart" onClick={() => changeIcon("car")}></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-gifts" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-gifts"
                  onClick={() => changeIcon("gift")}
                ></i>
              </div>
            </div>
            <button type="submit">CREATE</button>
          </form>
        </div>
      </div>
    </NewCategoryContainer>
  );
};

export default NewCategory;

// bank cart health game bill education car gift
