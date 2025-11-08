import React, { useMemo, useState } from 'react';
import { Container, Grid, Box, Typography, Drawer, IconButton, useMediaQuery, AppBar, Toolbar, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import STAFF from '../data/staff';
import StaffCard from '../components/StaffCard';
import StaffSidebar from '../components/StaffSidebar';
import { useTheme } from '@mui/material/styles';
import { useParams } from 'react-router-dom';

const GROUP_LABELS = {
  'hall-staff': 'Hall Staff',
  'dining-staff': 'Dining Staff',
  'canteen-staff': 'Canteen Staff',
  'dokan-staff': 'Dokan / Shops'
};

const StaffGroup = () => {
  const { groupKey } = useParams(); // route: /staffs/:groupKey
  const theme = useTheme();
  const mdUp = useMediaQuery(theme.breakpoints.up('md'));

  // Derived list of subgroups/types for the right-side nav
  const subgroups = useMemo(() => {
    const s = STAFF.filter(x => x.group === groupKey).map(x => x.subgroup || 'other');
    return Array.from(new Set(s));
  }, [groupKey]);

  // groups for sidebar: if dokan, show types as subLabel
  const groups = useMemo(() => {
    if (groupKey === 'dokan-staff') {
      return subgroups.map(sg => ({ key: sg, label: sg.charAt(0).toUpperCase() + sg.slice(1), subLabel: '' }));
    }
    // otherwise show general staff categories for quick navigation
    return [
      { key: groupKey, label: GROUP_LABELS[groupKey] || 'Staff', subLabel: '' },
      ...subgroups.map(sg => ({ key: sg, label: sg, subLabel: '' }))
    ];
  }, [groupKey, subgroups]);

  const [selectedSub, setSelectedSub] = useState(subgroups[0] || null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filtered = STAFF.filter(s => s.group === groupKey && (selectedSub ? s.subgroup === selectedSub : true));

  const handleSelect = (key) => {
    setSelectedSub(key);
    if (!mdUp) setDrawerOpen(false);
  };

  return (
    <Box>
      {/* Mobile: show top AppBar for sidebar toggle */}
      {!mdUp && (
        <AppBar position="static" color="transparent" elevation={0}>
          <Toolbar sx={{ px: 2 }}>
            <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" sx={{ ml: 1 }}>{GROUP_LABELS[groupKey] || 'Staff'}</Typography>
            <Box sx={{ flexGrow: 1 }} />
            <Button href="/dining" variant="outlined" size="small">Token</Button>
          </Toolbar>
        </AppBar>
      )}

      <Container maxWidth="lg" sx={{ mt: { xs: 2, md: 4 }, mb: 6 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>{GROUP_LABELS[groupKey] || 'Staff'}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
              Showing: {selectedSub || 'All'} — Click on a staff card for more details.
            </Typography>

            <Grid container spacing={2}>
              {filtered.map(st => (
                <Grid item xs={12} sm={6} key={st.id}>
                  <StaffCard staff={st} />
                </Grid>
              ))}
              {filtered.length === 0 && (
                <Grid item xs={12}>
                  <Typography color="text.secondary">No staff entries found for this category/subgroup.</Typography>
                </Grid>
              )}
            </Grid>
          </Grid>

          {/* Right sidebar */}
          <Grid item xs={12} md={4}>
            {mdUp ? (
              <Box sx={{ position: 'sticky', top: 96 }}>
                <StaffSidebar groups={groups} selectedKey={selectedSub} onSelect={handleSelect} />
              </Box>
            ) : (
              <Drawer anchor="right" open={drawerOpen} onClose={() => setDrawerOpen(false)}>
                <StaffSidebar groups={groups} selectedKey={selectedSub} onSelect={handleSelect} />
              </Drawer>
            )}
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default StaffGroup;