import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Layout } from '@/components/layouts'
import { Navbar } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout>
        <h1>CookieMaster</h1>
    </Layout>
  )
}
