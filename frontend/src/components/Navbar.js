import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

const Navbar = ({ darkMode, setDarkMode }) => (
  <AppBar position="fixed" color="primary">
    <Toolbar>
      <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
        Nazrul Hall Portal
      </Typography>
      <Button color="inherit" component={Link} to="/">Home</Button>
      <Button color="inherit" component={Link} to="/students">Students</Button>
      <Button color="inherit" component={Link} to="/dining">Dining</Button>
      <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
      <Button color="inherit" component={Link} to="/login">Login</Button>
      <IconButton onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Toolbar>
  </AppBar>
);
export default Navbar;
