import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { CssBaseline, ThemeProvider } from "@mui/material";

import { UIProvider } from "../context/ui";
import { EntriesProvider } from "../context/entries";

import { lightTheme, darkTheme } from "../themes";
interface Props {
  pageProps: AppProps;
  Component: any;
}

function App({ Component, pageProps }: Props) {
  return(
    <SnackbarProvider maxSnack={3}>
      <EntriesProvider>
        <UIProvider>
          <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </UIProvider>
      </EntriesProvider>
    </SnackbarProvider>
  );
}

export default App;
