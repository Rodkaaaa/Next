import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@nextui-org/react'

const inter = Inter({ subsets: ['latin'] })

export default function HomePage() {
  return (
    <>
    <Button color="gradient">Hola mundo!</Button>
    </>
  )
}
