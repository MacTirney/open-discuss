import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import { useNavigate } from 'react-router-dom'

import logo from '../assets/communication-logo.png'

const pages = ['discuss', 'communities', 'resources', 'login'];

const Navbar = () => {
  let navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Box
            component="img"
            sx={{ height: 54 }}
            alt="Logo"
            src={logo}
          >
          </Box>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            Open Discuss
          </Typography>
          {pages.map((page) => (
            <Button 
              key={page}
              color="inherit"
              onClick={() => navigate(`/${page}`)}
            >
              {page}
            </Button>
          ))}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Navbar;