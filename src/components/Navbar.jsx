import React, { useState, useEffect } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HouseIcon from '@mui/icons-material/House';
import InfoIcon from '@mui/icons-material/Info';
import MiscellaneousServicesIcon from '@mui/icons-material/MiscellaneousServices';
import BuildIcon from '@mui/icons-material/Build';
import ContactMailIcon from '@mui/icons-material/ContactMail';

export default function Nanbar() {
  const [isScrolling , setScrolling] = useState(false);
  useEffect(()=>{
      const handleScroll = ()=>{
          const isTop = window.scrollY < 100;
          if(!isTop){
              setScrolling(true)
          }else{
              setScrolling(false)
          }
      }; window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
  },[])

    const [openDrawer , setOpenDrawer] = useState(false);
    const handleDrawer = ()=>{
        if(!openDrawer){
            setOpenDrawer(true)
        }
    }
  return (
    <>
    <Box sx={{ flexGrow: 1 }} >
      <AppBar position="fixed"  style={{ backgroundColor: isScrolling ? '#da1c4b' : 'transparent', transition: 'background-color 0.3s', boxShadow: '0px 0px 2px rgba(0, 0, 0, 0.1)' }} >
        <Toolbar sx={{justifyContent:{xs:'space-around' }}}>
          <img src="src/assets/images/logo-1.png" style={{width:"5%"}} alt="" />
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } ,ml:4, textTransform:"uppercase" }}
          >
            outdoor
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={handleDrawer}
            >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
    <Drawer open={openDrawer} onClose={()=> setOpenDrawer(false)} anchor='right'>
    <Box minWidth={250}>
      <List >
        <ListItemButton>
          <ListItemIcon>
            <HouseIcon/>
            <ListItemText primary="home" sx={{textTransform:"capitalize", ml:2}}></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <InfoIcon/>
            <ListItemText primary="about" sx={{textTransform:"capitalize", ml:2}}></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <MiscellaneousServicesIcon/>
            <ListItemText primary="service" sx={{textTransform:"capitalize", ml:2}}></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <BuildIcon/>
            <ListItemText primary="projects" sx={{textTransform:"capitalize", ml:2}}></ListItemText>
          </ListItemIcon>
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <ContactMailIcon/>
            <ListItemText primary="contact" sx={{textTransform:"capitalize", ml:2}}></ListItemText>
          </ListItemIcon>
        </ListItemButton>
      </List>
    </Box>
  </Drawer>
    </>
  );
}