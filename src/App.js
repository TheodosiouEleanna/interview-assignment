import "./App.css";
import React from "react";
import styles from "./styles/styles.css";
import Navbar from "./components/Navbar/Navbar.tsx";
import { Routes, Route } from "react-router-dom";
import RentalList from "./components/RentalList/RentalList.tsx";
import Home from "./components/Home/Home.tsx";
import Settings from "./components/Settings/Settings.tsx";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/rentals' element={<RentalList />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </div>
  );
};

export default App;
