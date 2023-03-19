import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../constants/constants";

const MenuItem = (item: { text: string; path: string }): JSX.Element => {
  return (
    <li>
      <Link to={item.path}>{item.text.toUpperCase()}</Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <div
      style={{
        minWidth: "20%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        backgroundColor: "rgb(241, 241, 241)",
        boxShadow: "1px 1px 2px rgba(0, 0, 0, 0.2)",
      }}
    >
      <div
        style={{
          height: "49px",
          width: "80%",
          borderBottom: "1px solid rgb(51, 51, 51, 0.5)",
        }}
      ></div>
      <ul>
        {menuItems.map((item) => {
          return <MenuItem {...item} key={item.text} />;
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
