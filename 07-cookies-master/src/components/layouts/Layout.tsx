import { Padding } from '@mui/icons-material'
import Head from 'next/head'
import React from 'react'
import { Navbar } from '../ui';


type Props = {
    children?: JSX.Element | JSX.Element[];
  };


export const Layout = ({ children }: Props) => {
  return (
    <>
        <Head>

        </Head>
        <nav>
            <Navbar/>
        </nav>  
        <main  style={{ padding: '20px 50px' }}>
            {children}
        </main>

    </>
  )
}
