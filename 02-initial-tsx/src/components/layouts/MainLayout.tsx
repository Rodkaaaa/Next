import { FC, PropsWithChildren } from 'react';
import Head from 'next/head';
import { Navbar } from '../Navbar';
import styles from './MainLayout.module.css';

type Props ={
  children?: React.ReactNode;
};
const MainLayout: FC<Props>  = ({ children}) =>(  
  
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="About page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className={styles['main-container']}>
        
        {children}
        
        </main>
    </div>
);

export default MainLayout;


