import "./App.css";
import React from "react";
import styles from "./styles/styles.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { Routes, Route } from "react-router-dom";
import RentalList from "./components/RentalList/RentalList.tsx";
import Home from "./components/Home/Home.tsx";
import Settings from "./components/Settings/Settings.tsx";
import Header from "./components/Header/Header.tsx";

const App = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rentals' element={<RentalList />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
