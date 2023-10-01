import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import { Link, useNavigate } from 'react-router-dom'

import logo from '../assets/communication-logo.png'

export default function Navbar() {
  let navigate = useNavigate();

  // function handleClick(path) {
  //   navigate.push(path);
  // }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar disableGutters>
          {/* <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton> */}
          <Box
            className="clickable"
            component="img"
            sx={{ height: 54 }}
            alt="Logo"
            src={logo}
            onClick={() => navigate("/")}
          >
          </Box>
          {/* <img src={logo} /> */}
          <Box
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            <Button 
              onClick={() => navigate("/")}
              sx= {{
              fontSize: 'large',
              color: 'white'
            }}>
              Open Discuss
            </Button>
          </Box>
          <Button 
            color="inherit"
            onClick={() => navigate("/discuss")}
          >
            Discuss
          </Button>
          <Button 
            color="inherit"
            onClick={() => navigate("/communities")}
          >
            Communities
          </Button>
          <Button 
            color="inherit"
            onClick={() => navigate("/resources")}
          >
            Resources
          </Button>
          <Button 
            color="inherit"
            onClick={() => navigate("/login")}
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    // <nav className="nav">
    //     <div className="nav--left">
    //         <img className="nav--logo" src={computerLogo} />
    //         <h3>Open Discuss</h3>
    //     </div>
    //     <div className="nav--right">
    //         <h4>Discussions</h4>
    //         <h4>Communities</h4>
    //         <h4>Resources</h4>
    //         <h4>Login</h4>
    //     </div>
    // </nav>
  )
}