import React from "react";
import Title from "../Title/Title";

const PageWrapper = ({
  children,
  title,
}: {
  children: JSX.Element;
  title: string;
}) => {
  return (
    <div
      style={{
        height: "100%",
        overflow: "auto",
      }}
    >
      <div
        style={{
          width: "80%",
          height: "100%",
          marginLeft: "40px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Title
          title={title}
          style={{
            marginTop: "40px",
          }}
        />
        {children}
      </div>
    </div>
  );
};

export default PageWrapper;
