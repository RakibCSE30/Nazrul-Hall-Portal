import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Alert } from '@mui/material';

const Dining = () => {
  const [time, setTime] = useState(new Date());
  const [canCollect, setCanCollect] = useState(false);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    const t = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const h = time.getHours();
    setCanCollect(h >= 20 && h < 22);
  }, [time]);

  const collect = () => setMsg('টোকেন কালেক্ট! ID: ' + Math.random().toString(36).substr(2, 5));

  return (
    <Container style={{ textAlign: 'center', marginTop: '100px' }}>
      <Typography variant="h4">ডাইনিং টোকেন</Typography>
      <Typography variant="h6">সময়: {time.toLocaleTimeString('bn-BD')}</Typography>
      {!canCollect ? 
        <Alert severity="warning">৮টা-১০টা পর্যন্ত কালেক্ট করা যায়</Alert> : 
        <Alert severity="success">এখন কালেক্ট করুন!</Alert>
      }
      <br />
      <Button variant="contained" color="success" size="large" onClick={collect} disabled={!canCollect}>
        কালেক্ট করুন
      </Button>
      {msg && <Alert severity="info" style={{ marginTop: '20px' }}>{msg}</Alert>}
    </Container>
  );
};

export default Dining;
