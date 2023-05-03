import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';

type Props = {}

export const Navbar = (props: Props) => {
  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
            >
                <MenuSharpIcon/>
            </IconButton>

            <Typography>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}