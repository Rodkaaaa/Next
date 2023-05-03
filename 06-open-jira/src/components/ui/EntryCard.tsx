import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import React from 'react'

type Props = {}

export const EntryCard = (props: Props) => {
  return (
    <Card sx={{margin: 1}}
    //eventos de drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>
                    Esto es la descripcion
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: '2' }}>
                <Typography variant='body2'>hace 30 min</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}