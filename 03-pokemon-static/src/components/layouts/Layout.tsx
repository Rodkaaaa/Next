import Head from "next/head"
import {  FC } from "react"


type Props = {
    children: JSX.Element,
}

const Layout = ({children}:Props) => {
  return (
    <>
        <Head>
            <title>
                <meta name="author" content="Frederick Cid"/>
                <meta name="description" content="Informacion sobre el pokemon xxxxxx"/>
                <meta name="keywords" content="xxxxx, pokemon, pokedex"/>
            </title>
        </Head>
        {/* Navbar */}
        <main>
            {children}
        </main>
    </>
  )
}