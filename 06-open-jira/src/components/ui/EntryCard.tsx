import React from 'react'
import { Entry } from '@/interfaces';
import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { format } from 'date-fns'

interface Props {
    entry:Entry
}

export const EntryCard = ({entry}: Props) => {
  return (
    <Card sx={{margin: 1}}
    //eventos de drag
    >
        <CardActionArea>
            <CardContent>
                <Typography sx={{whiteSpace: 'pre-line'}}>
                    {entry.description}
                </Typography>
            </CardContent>
            <CardActions sx={{display: 'flex', justifyContent: 'end', paddingRight: '2' }}>
                <Typography variant='body2'>Crea    do a las: {format(entry.createAt,'HH:MM:SS')}</Typography>
            </CardActions>
        </CardActionArea>
    </Card>
  )
}