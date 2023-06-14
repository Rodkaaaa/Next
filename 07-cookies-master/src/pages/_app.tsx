import "@/styles/globals.css";
import { darkTheme, customTheme, lightTheme } from "@/themes";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";


interface Props extends AppProps {
  theme: string;
}

export default function App({ Component, pageProps, theme }: Props) {
  const [themeSelected, setThemeSelected] = useState(lightTheme);
  const themeCookies = Cookies.get('theme') || 'light'

  useEffect(() => {
    switch (themeCookies) {
      case "light":
        setThemeSelected(lightTheme);
        break;
      case "dark":
        setThemeSelected(darkTheme);
        break;
      case "custom":
        setThemeSelected(customTheme);
        break;
      default:
        setThemeSelected(lightTheme);
        break;
    }
  }, [themeCookies]);

  return (
    <ThemeProvider theme={themeSelected}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

/* App.getInitialProps = (appContext: AppContext) => {
  const { theme } = appContext.ctx.req
    ? (appContext.ctx.req as any).cookies
    : { theme: "light" };

  const validsTheme = ["light", "dark", "custom"];

  return {
    theme: validsTheme.includes(theme) ? theme : "dark",
  };
};
 */