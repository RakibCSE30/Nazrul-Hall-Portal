import React, { useState, useContext } from 'react';
import { Container, Typography, TextField, Button, Box, InputAdornment, IconButton } from '@mui/material';
import { Visibility, VisibilityOff, Mail as MailIcon, Lock as LockIcon } from '@mui/icons-material';
import { useNavigate, Link as RouterLink } from 'react-router-dom';
import API from '../services/api';
import { AuthContext } from '../contexts/AuthContext';
import { useNotification } from '../components/Notification';

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const { addNotification } = useNotification();
  const navigate = useNavigate();

  const [form, setForm] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const update = (k, v) => setForm(prev => ({ ...prev, [k]: v }));

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      addNotification({ message: 'Please provide email and password', type: 'error' });
      return;
    }
    setLoading(true);
    try {
      const res = await API.post('/auth/login', { email: form.email, password: form.password });
      const { token, user } = res.data;
      if (token && user) {
        login(token, user);
        addNotification({ message: 'Login successful', type: 'success' });
        navigate('/dining'); // redirect after login
      } else {
        addNotification({ message: 'Login failed: no token returned', type: 'error' });
      }
    } catch (err) {
      const msg = err.response?.data?.message || 'Login failed';
      addNotification({ message: msg, type: 'error' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="xs" sx={{ mt: 10 }}>
      <Box sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 2, boxShadow: 3, textAlign: 'center' }}>
        <Typography variant="h5" gutterBottom>লগইন করুন</Typography>

        <TextField
          label="Email"
          type="email"
          fullWidth
          margin="normal"
          value={form.email}
          onChange={(e) => update('email', e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><MailIcon /></InputAdornment>
          }}
        />

        <TextField
          label="Password"
          type={showPassword ? 'text' : 'password'}
          fullWidth
          margin="normal"
          value={form.password}
          onChange={(e) => update('password', e.target.value)}
          InputProps={{
            startAdornment: <InputAdornment position="start"><LockIcon /></InputAdornment>,
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(s => !s)} edge="end" aria-label="toggle password">
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            )
          }}
        />

        <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }} onClick={handleSubmit} disabled={loading}>
          {loading ? 'Logging...' : 'লগইন'}
        </Button>

        <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Button component={RouterLink} to="/signup" variant="text" size="small">Create account</Button>
          <Button component={RouterLink} to="/forgot-password" variant="text" size="small">Forgot password?</Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginPage;