import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Box, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/system';
import axios from 'axios';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const LogIn = ({ setUser }) => {
  const [userID, setUserID] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      console.log('Here 1')
      const response = await axios.post('http://localhost:7701/api/users/login', { userID, password });
      console.log('Here 2')
      if (response.data.success) {
        console.log('Here 3')
        setUser(response.data.user);
        console.log('Here 4')
        localStorage.setItem('token', response.data.token);
        navigate('/dashboard');
      } else {
        console.log('Here 5')
        setError(response.data.message || 'Login Failed. Please try again.');
        console.log('Here 6')
      }
    } catch (err) {
      console.log('Here 7');
      console.error('Login error:', err);
      console.log('Here 8');
      setError('Login failed. Please check your credentials and try again.');
    }
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h5" gutterBottom>Log In</Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Username"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          {error && (
            <Alert severity="error" style={{ margin: '20px 0' }}>{error}</Alert>
          )}
          <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: 20 }}>
            Log In
          </Button>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default LogIn;
