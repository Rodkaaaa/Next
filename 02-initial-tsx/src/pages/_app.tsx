import { NextPage } from 'next'
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react'
import '../styles/globals.css'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
}

type appPropsWhitLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: appPropsWhitLayout) {
    const getLayout = Component.getLayout || ((page) => page)
  
 /*  return(
         
      <Component {...pageProps} />
    )  */

    return getLayout(<Component {...pageProps} />)
}
