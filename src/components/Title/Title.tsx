import React from "react";
import Divider from "../Divider/Divider.tsx";

const Title = ({
  title,
  style,
}: {
  title: string;
  style?: React.CSSProperties;
}) => {
  return (
    <div style={style}>
      <h2>{title}</h2>
      <Divider />
    </div>
  );
};

export default Title;
