import { Diversity1, Groups, Home, Nightlight, Pages, Settings, SettingsAccessibility, Storefront } from '@mui/icons-material'
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'
import React from 'react'


    const Sidebar = ({setMode,mode}) => {
  return (
    <Box 
     flex={1} sx={{display:{xs: "none", sm : "block"}}}>
     <Box sx={{position:'fixed'}}>
     <List  >
     <ListItem disablePadding>
          <ListItemButton component="a" href="#home">
            <ListItemIcon>
            <Home />
            </ListItemIcon>
            <ListItemText primary="Homepage" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#Page">
            <ListItemIcon>
            <Pages />
            </ListItemIcon>
            <ListItemText primary="Pages" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#Group">
            <ListItemIcon>
            <Groups />
            </ListItemIcon>
            <ListItemText primary="Groups" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#Marketplace">
            <ListItemIcon>
            <Storefront />
            </ListItemIcon>
            <ListItemText primary="Marketplace" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#Friend">
            <ListItemIcon>
            <Diversity1 />
            </ListItemIcon>
            <ListItemText primary="Friends" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#Setting">
            <ListItemIcon>
            <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#Profile">
            <ListItemIcon>
            <SettingsAccessibility />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
          <ListItemButton component="a" href="#">
            <ListItemIcon>
            <Nightlight/>
            </ListItemIcon>
            <Switch  onChange={(e)=>{setMode(mode==="light" ? "dark" :"light")}} />
          </ListItemButton>
          </ListItem>
        </List>
     </Box>
    
    </Box>
  )
}

export default Sidebar