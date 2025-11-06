import React from 'react';
import { Container, Typography, Button } from '@mui/material';

const Home = () => (
  <Container style={{ textAlign: 'center', marginTop: '100px' }}>
    <Typography variant="h3">স্বাগতম – নজরুল হল পোর্টাল</Typography>
    <Typography variant="h6">JKKNIU নজরুল হল</Typography>
    <img src="https://jkkniu.edu.bd/wp-content/uploads/2020/08/logo.png" alt="Logo" style={{ width: '180px' }} />
    <br /><br />
    <Button variant="contained" size="large" href="/dining">টোকেন কালেক্ট</Button>
  </Container>
);
export default Home;
