 
// import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
// import { Link } from 'react-router-dom';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

// const Navbar = ({ darkMode, setDarkMode }) => (
  
//   <AppBar position="fixed" color="primary">
//     <Toolbar>
//       <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
//         Nazrul Hall Portal
//       </Typography>
//       <Button color="inherit" component={Link} to="/">Home</Button>
//       <Button color="inherit" component={Link} to="/students">Students</Button>
//       <Button color="inherit" component={Link} to="/dining">Dining</Button>
//       <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
//       <Button color="inherit" component={Link} to="/login">Login</Button>
//       <IconButton onClick={() => setDarkMode(!darkMode)}>
//         {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
//       </IconButton>
        
//     </Toolbar>
//   </AppBar>
// );
// export default Navbar;




// import React from 'react';
// import { AppBar, Toolbar, Typography, Button, IconButton, Menu, MenuItem, Box } from '@mui/material';
// import { Link } from 'react-router-dom';
// import DarkModeIcon from '@mui/icons-material/DarkMode';
// import LightModeIcon from '@mui/icons-material/LightMode';

// const teachersList = [
//   { group: 'Provost', items: ['Provost', 'Past Provost'] },
//   { group: 'Warden', items: ['Warden', 'Asst Warden'] },
//   { group: 'Other', items: ['Lecturer A', 'Lecturer B'] }
// ];

// const hallShangsodMembers = [
//   'VP','GS','AGS','Health Secretary','Sports Secretary','Sub-Sports Sec','Common Room Sec','Dining Room Sec',
//   'Somajseba Sec','Literature Sec','Drama Sec','Reading Room Sec','Executive Member 1','Executive Member 2','Executive Member 3'
// ];

// const Navbar = ({ darkMode, setDarkMode }) => {
//   const [teachersAnchor, setTeachersAnchor] = React.useState(null);
//   const [shangsodAnchor, setShangsodAnchor] = React.useState(null);

//   return (
//     <AppBar position="fixed" color="primary">
//       <Toolbar>
//         <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, textDecoration: 'none', color: 'white' }}>
//           Nazrul Hall Portal
//         </Typography>

//         <Button color="inherit" component={Link} to="/">Home</Button>
//         <Button color="inherit" component={Link} to="/students">Students</Button>
//         <Button color="inherit" component={Link} to="/dining">Dining</Button>
//         <Button color="inherit" component={Link} to="/gallery">Gallery</Button>

//         <Button color="inherit" onClick={(e) => setTeachersAnchor(e.currentTarget)}>Teachers</Button>
//         <Menu anchorEl={teachersAnchor} open={Boolean(teachersAnchor)} onClose={() => setTeachersAnchor(null)}>
//           {teachersList.map(g => (
//             <Box key={g.group} sx={{ px: 1 }}>
//               <MenuItem disabled sx={{ fontWeight: 'bold' }}>{g.group}</MenuItem>
//               {g.items.map(i => <MenuItem key={i}>{i}</MenuItem>)}
//             </Box>
//           ))}
//         </Menu>

//         <Button color="inherit" onClick={(e) => setShangsodAnchor(e.currentTarget)}>Hall Shangsod</Button>
//         <Menu anchorEl={shangsodAnchor} open={Boolean(shangsodAnchor)} onClose={() => setShangsodAnchor(null)}>
//           {hallShangsodMembers.map(m => <MenuItem key={m}>{m}</MenuItem>)}
//         </Menu>

//         <Button color="inherit" component={Link} to="/login">Login</Button>

//         <IconButton onClick={() => setDarkMode(prev => !prev)} color="inherit">
//           {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
//         </IconButton>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;




import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Divider,
  useTheme,
  useMediaQuery,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Responsive Navbar:
// - Shows inline buttons on md+
// - Shows hamburger that opens Drawer on smaller screens
// - Contains links: Home, Students, Dining, Gallery, Teachers, Hall Shangsod, Login/Profile
// - Dark mode toggle available both places

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Students', to: '/students' },
  { label: 'Dining', to: '/dining' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Teachers', to: '/teachers' },
  { label: 'Hall Shangsod', to: '/hall-shangsod' },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const { user, logout } = useContext(AuthContext || {});
  const navigate = useNavigate();
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const userMenuOpen = Boolean(anchorEl);

  const handleProfileClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleProfileClose = () => setAnchorEl(null);

  const handleLogout = () => {
    handleProfileClose();
    if (logout) logout();
    navigate('/');
  };

  const getInitials = (name = '') => {
    const parts = name.trim().split(' ');
    if (parts.length === 0) return 'U';
    if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
    return (parts[0].charAt(0) + parts[1].charAt(0)).toUpperCase();
  };

  // Drawer list for mobile
  const DrawerList = (
    <Box sx={{ width: 280 }} role="presentation" onClick={() => setDrawerOpen(false)} onKeyDown={() => setDrawerOpen(false)}>
      <Box sx={{ p: 2 }}>
        <Typography variant="h6">Nazrul Hall</Typography>
        <Typography variant="body2" color="text.secondary">Portal</Typography>
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItemButton key={item.to} component={Link} to={item.to}>
            <ListItemText primary={item.label} />
          </ListItemButton>
        ))}

        <Divider sx={{ my: 1 }} />

        {user ? (
          <>
            <ListItemButton onClick={() => { navigate('/profile'); }}>
              <ListItemText primary="My Profile" />
            </ListItemButton>
            <ListItemButton onClick={() => handleLogout()}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </>
        ) : (
          <ListItemButton component={Link} to="/login">
            <ListItemText primary="Login / Signup" />
          </ListItemButton>
        )}

        <Divider sx={{ my: 1 }} />

        <ListItemButton onClick={() => setDarkMode(!darkMode)}>
          <ListItemText primary={darkMode ? 'Light mode' : 'Dark mode'} />
          {darkMode ? <LightModeIcon fontSize="small" /> : <DarkModeIcon fontSize="small" />}
        </ListItemButton>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="fixed" color="primary" elevation={3}>
        <Toolbar>
          {/* Mobile: show menu icon */}
          {!mdUp && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open menu"
              onClick={() => setDrawerOpen(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          )}

          {/* Brand / Logo */}
          <Typography
            variant="h6"
            component={Link}
            to="/"
            sx={{
              flexGrow: 1,
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              alignItems: 'center',
              gap: 1,
            }}
          >
            <Box
              component="span"
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 36,
                height: 36,
                bgcolor: 'rgba(255,255,255,0.15)',
                borderRadius: 1,
                fontWeight: 700,
              }}
            >
              NH
            </Box>
            <Box component="span" sx={{ ml: 1, display: { xs: 'none', sm: 'inline' } }}>
              Nazrul Hall Portal
            </Box>
          </Typography>

          {/* Desktop nav items */}
          {mdUp && (
            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
              {navItems.map((item) => (
                <Button
                  key={item.to}
                  color="inherit"
                  component={Link}
                  to={item.to}
                  sx={{ textTransform: 'none' }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}

          {/* Right side controls */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, ml: 1 }}>
            {/* Dark mode toggle */}
            <IconButton color="inherit" onClick={() => setDarkMode(!darkMode)} aria-label="toggle dark mode">
              {darkMode ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>

            {/* User profile/menu */}
            {user ? (
              <>
                <IconButton color="inherit" onClick={handleProfileClick} aria-controls={userMenuOpen ? 'user-menu' : undefined} aria-haspopup="true" aria-expanded={userMenuOpen ? 'true' : undefined}>
                  <Avatar sx={{ width: 32, height: 32 }}>{getInitials(user.name || user.email || '')}</Avatar>
                </IconButton>
                <Menu id="user-menu" anchorEl={anchorEl} open={userMenuOpen} onClose={handleProfileClose} anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} transformOrigin={{ vertical: 'top', horizontal: 'right' }}>
                  <MenuItem onClick={() => { handleProfileClose(); navigate('/profile'); }}>Profile</MenuItem>
                  <MenuItem onClick={() => { handleProfileClose(); navigate('/dining'); }}>My Tokens</MenuItem>
                  <Divider />
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
              </>
            ) : (
              <Button color="inherit" component={Link} to="/login" startIcon={<AccountCircle />}>Login</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Drawer for mobile */}
      <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Navbar;
