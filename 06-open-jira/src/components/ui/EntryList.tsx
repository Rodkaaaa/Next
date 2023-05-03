import { List, Paper } from '@mui/material'
import React from 'react'
import { EntryCard } from './'

type Props = {}

export const EntryList = (props: Props) => {
  return (
    <div>
        <Paper sx={{ height: 'calc(100vh - 250px)', overflow: 'scroll', backgroundColor: 'transparent', padding: '3px 5px'}}>
            {/* todo: cambiará dependiendo si esta haciendo drag o no*/}
            <List sx={{ opacity: 1}}>
                <EntryCard/>
            </List>
        </Paper>
    </div>
  )
}