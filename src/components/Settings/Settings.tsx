import React, { useCallback, useEffect, useState, useMemo } from "react";
import { API_KEY } from "../../constants/constants";
import Button from "../Button/Button.tsx";
import Input from "../Input/Input.tsx";
import Card from "../RentalList/Card/Card.tsx";
import Title from "../Title/Title.tsx";

interface IStateSettings {
  fullName: string;
  apiKey: string;
  helperText?: string;
}

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
      <Title title='Settings' />
      <Card item={{}} content={cardContent} hideButton />
    </div>
  );
};

export default Settings;
