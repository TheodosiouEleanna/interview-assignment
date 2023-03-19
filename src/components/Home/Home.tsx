import React from "react";
import Title from "../Title/Title";

const Home = () => {
  return (
    <div
      style={{
        width: "80%",
        marginLeft: "40px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Title
        title='Home'
        style={{
          marginTop: "40px",
        }}
      />
    </div>
  );
};

export default Home;
