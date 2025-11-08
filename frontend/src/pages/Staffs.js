import React from 'react';
import { Container, Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const GROUPS = [
  { key: 'hall-staff', label: 'Hall Staff', subLabel: 'Office & caretakers' },
  { key: 'dining-staff', label: 'Dining Staff', subLabel: 'Kitchen & service' },
  { key: 'canteen-staff', label: 'Canteen Staff', subLabel: 'Canteen managers' },
  { key: 'dokan-staff', label: 'Dokan / Shops', subLabel: 'Stationary, Grocery, Tea & Snacks' },
];

const Staffs = () => {
  const navigate = useNavigate();

  return (
    <Container sx={{ mt: 10, mb: 6 }}>
      <Typography variant="h4" align="center" gutterBottom>Staff Directory</Typography>
      <Typography variant="body2" align="center" color="text.secondary" sx={{ mb: 4 }}>
        Select a staff category to see detailed staff members. (Responsive layout)
      </Typography>

      <Grid container spacing={3}>
        {GROUPS.map(g => (
          <Grid item xs={12} sm={6} md={3} key={g.key}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <CardContent>
                <Typography variant="h6">{g.label}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>{g.subLabel}</Typography>
              </CardContent>
              <Box sx={{ p: 2 }}>
                <Button variant="contained" fullWidth onClick={() => navigate(`/staffs/${g.key}`)}>
                  View {g.label}
                </Button>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Staffs;