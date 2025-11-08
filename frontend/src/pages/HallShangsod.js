import React, { useState, useEffect, useMemo } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Drawer,
  IconButton,
  AppBar,
  Toolbar,
  Button,
  Paper
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate, useParams } from 'react-router-dom';
import HALL_SHANGSOD from '../data/hallShangsod';
import HallSidebar from '../components/HallSidebar';
import HallMemberCard from '../components/HallMemberCard';

/**
 * Improved HallShangsod:
 * - LEFT permanent sidebar on desktop, LEFT drawer on mobile
 * - Clicking sidebar navigates to /hall-shangsod/:id and shows a big hero card for selected member
 * - Other members shown below as uniform cards (selected member excluded)
 */
const HallShangsod = () => {
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const { id: routeId } = useParams();

  // stable members list
  const members = useMemo(() => [...HALL_SHANGSOD], []);

  // selected member from route or default first
  const [selected, setSelected] = useState(() => {
    if (routeId) return HALL_SHANGSOD.find((m) => m.id === routeId) || HALL_SHANGSOD[0] || null;
    return HALL_SHANGSOD[0] || null;
  });

  // keep selected in sync with route param
  useEffect(() => {
    if (routeId) {
      const match = members.find((m) => m.id === routeId);
      if (match) setSelected(match);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeId]);

  const handleSelect = (member) => {
    setSelected(member);
    navigate(`/hall-shangsod/${member.id}`, { replace: false });
    if (!mdUp) setDrawerOpen(false); // close drawer on mobile
  };

  // other members excluding selected
  const otherMembers = members.filter((m) => m.id !== selected?.id);

  return (
    <>
      {!mdUp && (
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ px: 2 }}>
            <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>
              Hall Shangsod
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button href="/dining" variant="outlined" size="small">Token</Button>
          </Toolbar>
        </AppBar>
      )}

      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
        <Grid container spacing={3}>
          {/* Left sidebar on md+, Drawer left on mobile */}
          <Grid item xs={12} md={4} order={{ xs: 2, md: 1 }}>
            {mdUp ? (
              <Box sx={{ position: 'sticky', top: 96 }}>
                <HallSidebar members={members} selectedId={selected?.id} onSelect={handleSelect} />
              </Box>
            ) : (
              <Drawer anchor="left" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <Box sx={{ width: 300 }}>
                  <HallSidebar members={members} selectedId={selected?.id} onSelect={handleSelect} />
                </Box>
              </Drawer>
            )}
          </Grid>

          {/* Main content area */}
          <Grid item xs={12} md={8} order={{ xs: 1, md: 2 }}>
            {selected ? (
              <Paper elevation={3} sx={{ mb: 3, p: { xs: 2, sm: 3 } }}>
                <Box display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2} alignItems="flex-start">
                  <Avatar
                    src={selected.photo}
                    alt={selected.name}
                    sx={{
                      width: { xs: 160, sm: 260 },
                      height: { xs: 160, sm: 260 },
                      borderRadius: 2,
                      flexShrink: 0
                    }}
                  />
                  <Box>
                    <Typography variant="h4">{selected.name}</Typography>
                    <Typography variant="h6" color="text.secondary" gutterBottom>{selected.role}</Typography>

                    <Box mt={1}>
                      <Typography variant="body1"><strong>Designation:</strong> {selected.position || selected.role}</Typography>
                      <Typography variant="body1"><strong>Phone:</strong> {selected.phone}</Typography>
                      <Typography variant="body1"><strong>Email:</strong> {selected.email}</Typography>
                      <Typography variant="body1"><strong>Blood Group:</strong> {selected.blood}</Typography>
                      <Typography variant="body1" mt={1}><strong>Responsibilities:</strong> {selected.responsibilities || selected.info || '—'}</Typography>
                      <Typography variant="body1" mt={1}><strong>Office Hours:</strong> {selected.officeHours || 'As posted'}</Typography>
                    </Box>

                    <Box mt={2}>
                      <Typography variant="body2" color="text.secondary">
                        {selected.bio || selected.info}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Paper>
            ) : (
              <Typography>No member selected</Typography>
            )}

            <Typography variant="h6" gutterBottom>Other Members</Typography>

            <Grid container spacing={2}>
              {otherMembers.map((m) => (
                <Grid item xs={12} sm={6} md={6} key={m.id} sx={{ display: 'flex' }}>
                  {/* Grid child will stretch because HallMemberCard uses height:100% */}
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