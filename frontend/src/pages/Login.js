import React from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';

const Login = () => (
  <Container maxWidth="xs" style={{ marginTop: '100px' }}>
    <Box textAlign="center">
      <Typography variant="h4" gutterBottom>লগইন করুন</Typography>
      <TextField label="Student ID / Email" fullWidth margin="normal" />
      <TextField label="Password" type="password" fullWidth margin="normal" />
      <Button variant="contained" color="primary" size="large" fullWidth style={{ marginTop: '20px' }}>
        লগইন
      </Button>
    </Box>
  </Container>
);

export default Login;
