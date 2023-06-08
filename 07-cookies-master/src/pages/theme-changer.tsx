import React, { ChangeEvent, FC, useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import { Layout } from "@/components/layouts";
import Cookies from "js-cookie";
import {
  Button,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import axios from "axios";

interface Props {
  theme: string;
  name: string;
}

const ThemeChanger = ({ theme }: Props) => {
  const [currentTheme, setCurrentTheme] = useState(theme);

  const onThemeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedTheme = event.target.value;
    setCurrentTheme(selectedTheme);
    localStorage.setItem("theme", selectedTheme);
    Cookies.set("themeCookies", selectedTheme);
  };

  const onClick = async () => {
    const { data } = await axios.get("/api/hello");

    //console.log({ data });
  };

  useEffect(() => {
    //console.log("LocalStorage: ", localStorage.getItem("theme"));
    //console.log("Cookies: ", localStorage.getItem("theme"));
  }, []);

  return (
    <Layout>
      <Card>
        <CardContent>
          <FormControl>
            <FormLabel>Tema</FormLabel>
            <RadioGroup  value={currentTheme} onChange={onThemeChange}>
              <FormControlLabel
                value="light"
                control={<Radio />}
                label="Light"
              />
              <FormControlLabel value="dark" control={<Radio />} label="Dark" />
              <FormControlLabel
                value="custom"
                control={<Radio />}
                label="Custom"
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={onClick}>Solicitud</Button>
        </CardContent>
      </Card>
    </Layout>
  );
};
// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { theme = "light", name = "No Name" } = req.cookies;

  const validsTheme = ["light", "dark", "custom"];

  return {
    props: {
      theme: validsTheme.includes(theme) ? theme : "dark",
      name,
    },
  };
};

export default ThemeChanger;
