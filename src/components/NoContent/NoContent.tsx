import React from "react";

const NoContent = ({ message }: { message: string }) => {
  return (
    <div
      style={{
        display: "flex",
        height: "100%",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      {message}
    </div>
  );
};

export default NoContent;
