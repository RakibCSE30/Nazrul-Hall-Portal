import React, { useState } from 'react';
import { Container, Typography, Grid, Card, CardContent, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// groups shown on /teachers (click goes to /teachers/:group)
const GROUPS = [
  { key: 'provost', label: 'Provost' },
  { key: 'past-provost', label: 'Past Provost' },
  { key: 'warden', label: 'Warden' },
  { key: 'teacher', label: 'Teachers / Lecturers' },
  { key: 'others', label: 'Other Staff' }
];

const Teachers = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 10, mb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>Teachers & Hall Officials</Typography>
      <Typography variant="body1" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Click any group to see its members. Responsive layout — works on mobile and desktop.
      </Typography>

      <Grid container spacing={3}>
        {GROUPS.map(g => (
          <Grid item xs={12} sm={6} md={4} key={g.key}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h6">{g.label}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  View {g.label} page and see contact & profile.
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0 }}>
                <Button fullWidth variant="contained" onClick={() => navigate(`/teachers/${g.key}`)}>
                  Open {g.label}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Teachers;