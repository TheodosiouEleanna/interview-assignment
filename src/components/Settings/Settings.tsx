import React, { useCallback, useEffect, useState, useMemo } from "react";
import { API_KEY } from "../../constants/constants";
import Card from "../RentalList/Card/Card.tsx";

interface IStateSettings {
  fullName: string;
  apiKey: string;
  helperText?: string;
}

export const Input = ({
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

export const Button = ({
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

const Settings = () => {
  const [settings, setSettings] = useState<IStateSettings>({
    fullName: "",
    apiKey: "",
    helperText: "",
  });

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      localStorage.setItem("fullName", settings.fullName);
      localStorage.setItem("apiKey", settings.apiKey);
      setSettings((prevSettings) => ({
        ...prevSettings,
        helperText: "Settings saved!",
      }));
    },
    [settings.apiKey, settings.fullName]
  );

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
  const cardContent = useMemo(
    () => (
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginTop: "30px",
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
          <Button
            type='submit'
            label='Save'
            helperText={settings.helperText}
            style={{ position: "absolute", bottom: 30, right: 30 }}
          />
        </div>
      </form>
    ),
    [
      handleInputChange,
      handleSubmit,
      settings.apiKey,
      settings.fullName,
      settings.helperText,
    ]
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
    <div style={{ margin: "40px" }}>
      <h2>Settings</h2>
      <Card item={{}} content={cardContent} hideButton />
    </div>
  );
};

export default Settings;
