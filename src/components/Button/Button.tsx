import React from "react";
const Button = ({
  type,
  label,
  style,
  helperText = "",
  onClick,
}: {
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
  style?: React.CSSProperties;
  helperText?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <>
      <button type={type} style={style} onClick={onClick}>
        {label}
      </button>
      <p style={{ color: "green" }}>{helperText}</p>
    </>
  );
};

export default Button;
