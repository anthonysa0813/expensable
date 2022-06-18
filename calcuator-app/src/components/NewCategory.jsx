import React, { useState } from "react";
import { colorsObject } from "../helper/colorsArr";
import { NewCategoryContainer } from "../styles/newCategory";

const NewCategory = ({ setShowModalCategory }) => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [icon, setIcon] = useState("");
  const [activeColor, setActiveColor] = useState({
    active: false,
    color: "",
  });

  const handleClick = () => {
    setShowModalCategory((modalCategory) => {
      return !modalCategory;
    });
  };
  const changeColor = (color) => {
    setColor(colorsObject(color));
    setActiveColor({
      active: true,
      color,
    });
  };

  const changeIcon = (icon) => {
    console.log(icon);
    setIcon(icon);
  };

  const categorySubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      color,
      icon,
    });
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
                <i
                  className="icon-rent"
                  onClick={() => changeIcon("icon-rent")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-groceries" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-groceries"
                  onClick={() => changeIcon("icon-groceries")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-health" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-health"
                  onClick={() => changeIcon("icon-health")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-play" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-play"
                  onClick={() => changeIcon("icon-play")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-educ" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-educ"
                  onClick={() => changeIcon("icon-educ")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-education2" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-education2"
                  onClick={() => changeIcon("icon-education2")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-transport" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-transport"
                  onClick={() => changeIcon("icon-transport")}
                ></i>
              </div>
              <div
                className={`circle-icon ${
                  icon == "icon-gifts" ? "activeIconBorder" : ""
                }`}
              >
                <i
                  className="icon-gifts"
                  onClick={() => changeIcon("icon-gifts")}
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
