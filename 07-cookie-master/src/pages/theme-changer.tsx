import React, { ChangeEvent, useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import {
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

const ThemeChangerPage = () => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem('theme', selectedTheme)
  };

  useEffect(() => {
    console.log('localStorage:', localStorage.getItem('theme') );

  }, [])
  


  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="light"
              />
              <FormControlLabel 
                value="dark" 
                control={<Radio />} 
                label="dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="custom"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Layout>
  );
};

export default ThemeChangerPage;