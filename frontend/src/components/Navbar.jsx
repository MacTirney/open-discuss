import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import logo from '../assets/communication-logo.png'

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
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
                        component="img"
                        sx={{ height: 54 }}
                        alt="Logo"
                        src={logo}
                    >
                    </Box>
                    {/* <img src={logo} /> */}
                    <Typography 
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}>
                        Open Discuss
                    </Typography>
                    <Button color="inherit">Discuss</Button>
                    <Button color="inherit">Communities</Button>
                    <Button color="inherit">Resources</Button>
                    <Button color="inherit">Login</Button>
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