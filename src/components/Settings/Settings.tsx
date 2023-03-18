import React, { useCallback, useEffect, useState } from "react";
import { API_KEY } from "../../constants/constants";

export const Input = ({
  type,
  name,
  label,
  value,
  onChange,
}: {
  type: string;
  name: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div style={{ padding: "10px", display: "flex" }}>
      <label>{label}:</label>
      <input type={type} name={name} value={value} onChange={onChange} />
    </div>
  );
};

export const Button = ({
  type,
  label,
  style,
  onClick,
}: {
  type?: "button" | "submit" | "reset" | undefined;
  label: string;
  style?: React.CSSProperties;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  return (
    <div style={{ margin: "10px" }}>
      <button type={type} style={style} onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

const Settings = () => {
  const [settings, setSettings] = useState({
    fullName: "",
    apiKey: "",
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    localStorage.setItem("fullName", settings.fullName);
    localStorage.setItem("apiKey", settings.apiKey);
  };

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      console.log(name, value);

      setSettings({
        ...settings,
        [name]: value,
      });
    },
    [settings]
  );

  useEffect(() => {
    const storedFullName = localStorage.getItem("fullName");
    const storedApiKey = localStorage.getItem("apiKey");
    setSettings({
      fullName: storedFullName || "",
      apiKey: storedApiKey || `${API_KEY}`,
    });
  }, []);

  return (
    <div
      style={{
        minHeight: "300px",
        backgroundColor: "rgb(241, 241, 241)",
        position: "relative",
        borderRadius: "10px",
        margin: "40px",
        display: "flex",
        flexDirection: "column",
        minWidth: "700px",
        maxWidth: "1000px",
        height: "50vh",
        marginLeft: 30,
      }}
    >
      <div style={{ margin: "40px" }}>
        <h2>Settings</h2>
        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "40px",
            }}
          >
            <Input
              type='text'
              name='fullName'
              label='Full Name'
              value={settings.fullName}
              onChange={handleInputChange}
            />
            <Input
              type='text'
              name='apiKey'
              label='API Key'
              value={settings.apiKey}
              onChange={handleInputChange}
            />
            <Button type='submit' label='Save' />
            <Button
              style={{ position: "absolute", right: 40, bottom: 40 }}
              type='submit'
              label='Clear Cache
            '
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;
