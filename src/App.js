import "./App.css";
import React from "react";
import styles from "./styles/styles.css";
import Sidebar from "./components/Sidebar/Sidebar.tsx";
import { Routes, Route } from "react-router-dom";
import RentalList from "./components/RentalList/RentalList.tsx";
import Home from "./components/Home/Home.tsx";
import Settings from "./components/Settings/Settings.tsx";
import Header from "./components/Header/Header.tsx";
import RentalDetails from "./components/RentalDetails/RentalDetails.tsx";

// Todo: Move css to a separate file
// Todo: Organize styles
// Todo: Add a loader
// Todo: page wrapper

const App = () => {
  return (
    <div style={{ display: "flex", width: "100%", height: "100%" }}>
      <Sidebar />
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/rentals' element={<RentalList />} />
          <Route path='/rentals/:rentalId' element={<RentalDetails />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
