import Image from 'next/image'
import styles from './page.module.css'
import RootLayout from './layout'
import DataGridDemo from '@/component/Grid'

export default function Home() {
  return (

    <RootLayout>
        <DataGridDemo/>

    </RootLayout>
  
  )
}
