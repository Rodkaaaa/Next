import "@/styles/globals.css";
import { darkTheme } from "@/themes";
import type { AppContext, AppProps } from "next/app";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { NextPageContext } from "next";
import Cookies from 'js-cookie';
import { customTheme } from '../themes/custom-theme';

export default function App({ Component, pageProps, theme }: AppProps) {
  console.log({ theme });

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

App.getInitialProps = async (appContext: AppContext) => {
  
  
  const cookies = appContext.ctx.req ? (appContext.ctx.req as any).cookies : {theme: 'light'}
  
  console.log(cookies)
  
  return {

    theme: cookies 
  };
};
