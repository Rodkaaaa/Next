import { Inter } from 'next/font/google';
import { Layout } from '@/components/layouts';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';
import { EntryList, NewEntry } from '@/components/ui';
import { url } from 'inspector';




function HomePage() {


  return (
    <Layout title='Home - OpenJira'>
      
      <Grid container spacing={3}>

        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Pendientes" sx={{textAlign: 'center'}}/>
              {/* agregar nueva entrada */}
              <NewEntry/>
              <EntryList status='pending'/>
              
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="En Progreso" sx={{textAlign: 'center'}}/>
            <EntryList status='in-progress'/>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4} >
          <Card sx={{height: 'calc(100vh - 100px)'}}>
            <CardHeader title="Completadas" sx={{textAlign: 'center'}}/>
            <EntryList status='finished'/>
          </Card>
        </Grid>

      </Grid>
    </Layout>
  )
}


export default HomePage;
