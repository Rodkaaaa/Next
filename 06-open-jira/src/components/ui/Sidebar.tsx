import React from 'react'
import { Drawer, Box, Typography, List, ListItem, ListItemIcon, ListItemText, Divider, ListItemButton } from '@mui/material';
import InboxSharpIcon from '@mui/icons-material/InboxSharp';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';

type Props = {

}

const menuItems: string[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = (Props: Props) => {
    return (
        <Drawer
            anchor='left'
            open={true}
            onClose={() => console.log('cerrando')}
        >
            <Box sx={{ width: '300px' }}>

            </Box>
            <Box sx={{ padding: ' 5px 10px ' }}>
                <Typography variant='h4'>MENÚ</Typography>
            </Box>
            <Divider />
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxSharpIcon /> : <EmailSharpIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))
                }
            </List>
            <Divider />
            <List>
                {
                    menuItems.map((text, index) => (
                        <ListItemButton key={text}>
                            <ListItemIcon>
                                {index % 2 ? <InboxSharpIcon /> : <EmailSharpIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ))
                }
            </List>
        </Drawer>
    )
}