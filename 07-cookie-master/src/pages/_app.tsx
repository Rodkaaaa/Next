import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { lightTheme, darkTheme, customTheme } from "../themes";
import { CssBaseline, ThemeProvider } from "@mui/material";
interface Props {
  pageProps: AppProps;
  Component: any;
}

export default function App({ Component, pageProps }: Props) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
