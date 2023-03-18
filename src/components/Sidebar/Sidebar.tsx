import React, { useState } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../constants/constants";

const MenuItem = (item: { text: string; path: string }): JSX.Element => {
  return (
    <li>
      <Link to={item.path}>{item.text}</Link>
    </li>
  );
};

const Sidebar = () => {
  return (
    <nav
      style={{
        minWidth: "300px",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        paddingTop: "30px",
        backgroundColor: "rgb(250, 250, 250)",
      }}
    >
      <ul>
        {menuItems.map((item) => {
          return <MenuItem {...item} key={item.text} />;
        })}
      </ul>
    </nav>
  );
};

export default Sidebar;
