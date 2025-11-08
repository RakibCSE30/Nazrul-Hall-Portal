// src/components/Footer.jsx
import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Link,
  IconButton,
  Divider,
} from '@mui/material';
import {
  Facebook,
  Instagram,
  Twitter,
  YouTube,
  School,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

const Footer = () => {
  const theme = useTheme();
  const mode = theme.palette.mode;

  const bg =
    mode === 'dark'
      ? 'linear-gradient(90deg, #0d1b2a, #1b263b)'
      : 'linear-gradient(90deg, #124261, #2A628F)';

  const textColor = 'rgba(255,255,255,0.92)';

  const socialLinks = [
    { icon: <Facebook />, href: 'https://facebook.com/nazrulhall' },
    { icon: <Instagram />, href: 'https://instagram.com/nazrulhall' },
    { icon: <Twitter />, href: 'https://twitter.com/nazrulhall' },
    { icon: <YouTube />, href: 'https://youtube.com/nazrulhall' },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: bg,
        color: textColor,
        py: { xs: 5, md: 7 },
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* ---- About ---- */}
          <Grid item xs={12} md={4}>
            <Typography
              variant="h6"
              sx={{ fontWeight: 700, display: 'flex', alignItems: 'center', gap: 1 }}
            >
              <School fontSize="large" />
              Nazrul Hall
            </Typography>
            <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.85 }}>
              JKKNIU — A digital portal for hall management, dining tokens,
              student services and community engagement.
            </Typography>
          </Grid>

          {/* ---- Quick Links ---- */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Quick Links
            </Typography>
            <Box sx={{ mt: 1.5, display: 'flex', flexDirection: 'column', gap: 0.8 }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'Students', to: '/students' },
                { label: 'Dining', to: '/dining' },
                { label: 'Staff', to: '/staffs' },
                { label: 'Gallery', to: '/gallery' },
                { label: 'Hall Shangsod', to: '/hall-shangsod' },
              ].map(l => (
                <Link
                  key={l.to}
                  href={l.to}
                  underline="hover"
                  color="inherit"
                  sx={{ opacity: 0.9, '&:hover': { opacity: 1 } }}
                >
                  {l.label}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* ---- Contact & Social ---- */}
          <Grid item xs={12} md={4}>
            <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
              Contact Us
            </Typography>
            <Typography variant="body2" sx={{ mt: 1.5, opacity: 0.9 }}>
              Office: +88 0171-0000000
              <br />
              Email: office@jkkniu.edu.bd
            </Typography>

            <Box sx={{ mt: 2, display: 'flex', gap: 1 }}>
              {socialLinks.map((s, i) => (
                <IconButton
                  key={i}
                  component="a"
                  href={s.href}
                  target="_blank"
                  rel="noopener"
                  sx={{
                    color: 'rgba(255,255,255,0.85)',
                    '&:hover': { color: '#fdd835' },
                  }}
                >
                  {s.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, borderColor: 'rgba(255,255,255,0.12)' }} />

        {/* ---- Copyright ---- */}
        <Box sx={{ textAlign: 'center' }}>
          <Typography
            variant="caption"
            sx={{
              background: 'linear-gradient(90deg, #fdd835, #2A628F)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: 600,
              letterSpacing: 0.8,
              animation: 'pulse 3s infinite',
            }}
          >
            © {new Date().getFullYear()} Nazrul Hall — All Rights Reserved.
          </Typography>
        </Box>
      </Container>

      {/* tiny pulse animation */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.9; }
          50% { opacity: 1; }
        }
      `}</style>
    </Box>
  );
};

export default Footer;