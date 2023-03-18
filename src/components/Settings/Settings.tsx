import React from "react";
import { API_KEY } from "../../constants/constants";

const Settings = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "50%",
        height: "50vh",
        backgroundColor: "rgb(250, 250, 250)",
        borderRadius: 10,
        marginTop: 30,
        marginLeft: 30,
      }}
    >
      <div>
        <h1>Settings</h1>
        <div>
          <label>Full Name</label>
          <input type='text' value='Hosthub API' />
        </div>
        <div>
          <label>Api Key</label>
          <input type='text' value={API_KEY} />
        </div>
      </div>
    </div>
  );
};

export default Settings;
