import React from 'react';
import { Box, Container, Typography, Grid, Link } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  // Background gradient based on mode
  const bg =
    mode === 'dark'
      ? 'linear-gradient(90deg, rgba(20,20,20,1) 0%, rgba(35,35,35,1) 100%)'
      : 'linear-gradient(90deg, #124261 0%, #2A628F 100%)'; // changed to match navbar gradient

  const textColor = mode === 'dark' ? 'rgba(255,255,255,0.9)' : 'rgba(255,255,255,0.9)';

  return (
    <Box
      component="footer"
      sx={{
        background: bg,
        color: textColor,
        py: 5,
        mt: 6,
        borderTop: 1,
        borderColor: mode === 'dark' ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Column 1: About */}
          <Grid item xs={12} md={4}>
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Nazrul Hall
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.8 }}>
              JKKNIU — Nazrul Hall portal for digital hall management, dining, and student services.
            </Typography>
          </Grid>

          {/* Column 2: Quick Links */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ mt: 1, display: 'flex', flexDirection: 'column', gap: 0.5 }}>
              <Link href="/" underline="hover" color="inherit">Home</Link>
              <Link href="/students" underline="hover" color="inherit">Students</Link>
              <Link href="/dining" underline="hover" color="inherit">Dining</Link>
              <Link href="/staffs" underline="hover" color="inherit">Staff</Link>
              <Link href="/gallery" underline="hover" color="inherit">Gallery</Link>
            </Box>
          </Grid>

          {/* Column 3: Contact */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Contact
            </Typography>
            <Typography variant="body2" sx={{ mt: 1, opacity: 0.9 }}>
              Office: +88 0171-0000000 <br />
              Email: office@jkkniu.edu.bd
            </Typography>
          </Grid>
        </Grid>

        {/* Bottom Gradient Text */}
        <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{
              background: 'linear-gradient(90deg, #f0c93d, #2A628F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 'bold',
              letterSpacing: 0.5,
            }}
          >
            © {new Date().getFullYear()} Nazrul Hall — All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
