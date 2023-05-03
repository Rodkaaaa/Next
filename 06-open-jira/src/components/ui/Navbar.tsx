import React, { useContext } from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@mui/material';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import { UIContext } from '@/context/ui';

type Props = {}

export const Navbar = (props: Props) => {

  const {openSideMenu} = useContext(UIContext)

  return (
    <AppBar position='sticky' elevation={0}>
        <Toolbar>
            <IconButton
                size='large'
                edge='start'
                onClick={openSideMenu}
            >
                <MenuSharpIcon/>
            </IconButton>

            <Typography>OpenJira</Typography>
        </Toolbar>
    </AppBar>
  )
}