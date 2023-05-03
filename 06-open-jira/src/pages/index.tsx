import { Layout } from '@/components/layouts';
import { Typography } from '@mui/material';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin', 'cyrillic', 'greek'] })

function HomePage() {
  return (
    <Layout title='Hola Mundo'>
      <Typography variant='h1' color='primary'>Hola mundo</Typography>
    </Layout>
  )
}


export default HomePage;
