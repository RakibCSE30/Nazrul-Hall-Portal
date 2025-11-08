import React, { useState } from 'react';
import { Container, Box, Typography, Grid, Card, CardContent, Avatar, IconButton, useMediaQuery, Drawer, AppBar, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HALL_SHANGSOD from '../data/hallShangsod';
import HallSidebar from '../components/HallSidebar';

const HallShangsod = () => {
  const members = HALL_SHANGSOD;
  const [selected, setSelected] = useState(members[0]);
  const isMdUp = useMediaQuery((theme) => theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleSelect = (m) => {
    setSelected(m);
    if (!isMdUp) setDrawerOpen(false);
  };

  return (
    <Box>
      {/* Small screen top appbar to show sidebar toggle */}
      {!isMdUp && (
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ px: 2 }}>
            <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>Hall Shangsod</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button href="/dining" variant="outlined" size="small">Token</Button>
          </Toolbar>
        </AppBar>
      )}

      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
        <Grid container spacing={3}>
          {/* Main content */}
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <Box display="flex" gap={2} alignItems="center">
                  <Avatar src={selected.photo} sx={{ width: 96, height: 96 }} />
                  <Box>
                    <Typography variant="h5">{selected.name}</Typography>
                    <Typography variant="subtitle1" color="text.secondary">{selected.role}</Typography>
                    <Typography variant="body2" sx={{ mt: 1 }}>{selected.bio}</Typography>
                    <Typography variant="body2" sx={{ mt: 1, color: 'text.secondary' }}>
                      Phone: {selected.phone} • Email: {selected.email}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>

            <Box sx={{ mt: 3 }}>
              <Typography variant="h6" gutterBottom>All Members</Typography>
              <Grid container spacing={2}>
                {members.map(m => (
                  <Grid item xs={12} sm={6} key={m.id}>
                    <Card onClick={() => handleSelect(m)} sx={{ cursor: 'pointer' }}>
                      <CardContent sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
                        <Avatar src={m.photo} />
                        <Box>
                          <Typography fontWeight="bold">{m.name}</Typography>
                          <Typography variant="body2" color="text.secondary">{m.role}</Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>

          {/* Right-side sidebar (permanent on md+, Drawer for xs/sm) */}
          <Grid item xs={12} md={4}>
            {isMdUp ? (
              <Box sx={{ position: 'sticky', top: 96 }}>
                <HallSidebar members={members} selectedId={selected.id} onSelect={handleSelect} />
              </Box>
            ) : (
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <HallSidebar members={members} selectedId={selected.id} onSelect={handleSelect} />
              </Drawer>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HallShangsod;