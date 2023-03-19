import React from "react";
const Input = ({
  type,
  name,
  label,
  value,
  style,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  style?: React.CSSProperties;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div style={{ padding: "10px" }}>
      <label>{label}:</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export default Input;
