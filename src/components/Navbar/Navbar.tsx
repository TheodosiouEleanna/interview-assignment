import React, { useState } from "react";
import { Link } from "react-router-dom";

const menuItems = [
  { text: "Rentals", path: "/rentals" },
  { text: "Settings ", path: "/settings" },
];

const MenuItem = (item: { text: string; path: string }): JSX.Element => {
  return (
    <li>
      <Link to={item.path}>{item.text}</Link>
    </li>
  );
};

const Navbar = () => {
  return (
    <nav
      style={{
        width: "30%",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "30px",
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

export default Navbar;
