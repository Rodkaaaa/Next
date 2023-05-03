import { UIProvider } from '@/context/ui'
import '@/styles/globals.css'
import { darkTheme, lightTheme } from '@/themes'
import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import type { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps) {
  return (
    <UIProvider>
      <ThemeProvider theme={lightTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </UIProvider>
  )
}

export default App