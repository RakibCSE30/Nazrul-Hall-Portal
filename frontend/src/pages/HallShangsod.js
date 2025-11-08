// src/pages/HallShangsod.js
import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Grid,
  Paper,
  Avatar,
  Typography,
  Box,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useParams } from 'react-router-dom';

import HALL_SHANGSOD from '../data/hallShangsod';
import HallSidebar from '../components/HallSidebar';
import HallMemberCard from '../components/HallMemberCard';

const HallShangsod = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));

  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { id: routeId } = useParams();

  const members = useMemo(() => [...HALL_SHANGSOD], []);

  const [selected, setSelected] = useState(() => {
    if (routeId) return members.find(m => m.id === routeId) ?? members[0];
    return members[0];
  });

  // Sync selected member when URL changes
  useEffect(() => {
    if (routeId) {
      const match = members.find(m => m.id === routeId);
      if (match) setSelected(match);
    }
  }, [routeId, members]);

  const handleSelect = (member) => {
    setSelected(member);
    navigate(`/hall-shangsod/${member.id}`);
    if (!isDesktop) setDrawerOpen(false); // Close drawer on mobile
  };

  const otherMembers = members.filter(m => m.id !== selected?.id);

  // Mobile Top Bar
  const MobileTopBar = !isDesktop && (
    <AppBar position="static" color="transparent" elevation={0}>
      <Toolbar sx={{ px: 2 }}>
        <IconButton
          edge="start"
          color="inherit"
          onClick={() => setDrawerOpen(true)}
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" sx={{ ml: 1 }}>
          Hall Shangsod
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <Button href="/dining" variant="outlined" size="small">
          Token
        </Button>
      </Toolbar>
    </AppBar>
  );

  // Sidebar Component (Sticky on Desktop, Drawer on Mobile)
  const Sidebar = (
    <>
      {isDesktop ? (
        <Box sx={{ position: 'sticky', top: 96, height: 'fit-content' }}>
          <HallSidebar
            members={members}
            selectedId={selected?.id}
            onSelect={handleSelect}
          />
        </Box>
      ) : (
        <Drawer
          anchor="left"
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        >
          <Box sx={{ width: 300 }}>
            <HallSidebar
              members={members}
              selectedId={selected?.id}
              onSelect={handleSelect}
            />
          </Box>
        </Drawer>
      )}
    </>
  );

  return (
    <>
      {MobileTopBar}

      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
        <Grid container spacing={3}>
          {/* LEFT COLUMN: Sidebar (Desktop: sticky, Mobile: drawer) */}
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              // Force left side on desktop
              order: { xs: 2, md: 1 },
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {Sidebar}
          </Grid>

          {/* RIGHT COLUMN: Hero Card + Other Members */}
          <Grid
            item
            xs={12}
            md={8}
            sx={{
              order: { xs: 1, md: 2 },
            }}
          >
            {/* Hero Card */}
            {selected && (
              <Paper elevation={3} sx={{ mb: 3, p: { xs: 2, sm: 3 } }}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  gap={2}
                  alignItems="flex-start"
                >
                  <Avatar
                    src={selected.photo}
                    alt={selected.name}
                    sx={{
                      width: { xs: 160, sm: 260 },
                      height: { xs: 160, sm: 260 },
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  />
                  <Box>
                    <Typography variant="h4">{selected.name}</Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>
                      {selected.role}
                    </Typography>

                    <Box mt={1}>
                      <Typography variant="body1">
                        <strong>Phone:</strong> {selected.phone}
                      </Typography>
                      <Typography variant="body1">
                        <strong>Email:</strong> {selected.email}
                      </Typography>
                      <Typography variant="body1" mt={1}>
                        <strong>Bio:</strong> {selected.bio}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            )}

            {/* Other Members Grid */}
            <Typography variant="h6" gutterBottom>
              Other Members
            </Typography>

            <Grid container spacing={2}>
              {otherMembers.map((m) => (
                <Grid item xs={12} sm={6} md={6} key={m.id} sx={{ display: 'flex' }}>
                  <HallMemberCard member={m} onClick={handleSelect} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default HallShangsod;