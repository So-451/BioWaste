import React, { useState } from 'react';
import { TextField, Button, Typography, Container, Paper, Box, Alert } from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const SignUp = ({ setUser }) => {
  const [hospitalName, setHospitalName] = useState('');
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async () => {
    if (!hospitalName || !userID || !email || !password) {
      setError('All fields are required.');
      return;
    }

    try {
      setError('Here 1')
      const response = await axios.post('http://localhost:7701/api/users/signup', {
        hospitalName,
        userID,
        email,
        password,
      });
      
      if (response.data.success) {
        setUser(response.data.user);
        setError('Here 2')
        navigate('/login');
      } else {
        setError(response.data.message || 'Sign up failed. Please try again.');
      }
    } catch (err) {
      console.error('Sign up error:', err);
      setError('Sign up failed. Please try again.');
    }
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Typography variant="h5" gutterBottom>Sign Up</Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="Hospital Name"
            value={hospitalName}
            onChange={(e) => setHospitalName(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="User ID"
            value={userID}
            onChange={(e) => setUserID(e.target.value)}
            fullWidth
            margin="normal"
            variant="outlined"
          />
          <TextField
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <Button variant="contained" color="primary" onClick={handleSignUp} style={{ marginTop: 20 }}>
            Sign Up
          </Button>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default SignUp;
