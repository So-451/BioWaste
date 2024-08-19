import React, { useEffect, useState } from 'react';
import {
  AppBar, Toolbar, Typography, IconButton, Grid, Paper, TextField, Button, Dialog, DialogTitle, DialogContent, DialogActions
} from '@mui/material';
import { styled } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Root = styled('div')({
  flexGrow: 1,
  backgroundColor: '#f5deb3', // Pastel Wheat color
  minHeight: '100vh',
});

const Title = styled(Typography)({
  flexGrow: 1,
  fontSize: '2rem', // Larger title font
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const StyledTextField = styled(TextField)({
  backgroundColor: '#ffffff', // White background for text fields
});

const Dashboard = ({ user, setUser }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Show the dialog if any profile information is missing
    if (!user.hospitalName || !user.userID || !user.email || !user.address || !user.hospitalInfo) {
      setOpen(true);
    }
  }, [user]);

  const handleProfileClick = () => {
    navigate('/profile');
  };

  const handleClose = () => {
    setOpen(false);
    navigate('/profile');
  };

  return (
    <Root>
      <AppBar position="static">
        <Toolbar>
          <Title variant="h6">Dashboard</Title>
          <IconButton color="inherit" onClick={handleProfileClick}>
            <AccountCircleIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Typography variant="h4" align="center" style={{ marginTop: 20 }}>
        Welcome, {user.hospitalName}
      </Typography>
      <Grid container spacing={3} style={{ marginTop: 20 }} justifyContent="center">
        <Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
          <StyledTextField
            label="Hospital ID"
            variant="outlined"
            value={user.hospitalID} // Display the hospital ID
            fullWidth
            style={{ maxWidth: 300, margin: '0 auto' }}
            InputProps={{
              readOnly: true,
            }}
          />
          <Typography variant="body1" style={{ fontSize: '0.8rem', marginTop: 10 }}>
            Today's load, {new Date().toLocaleString()}
          </Typography>
        </Grid>
        <Grid item xs={12} md={12}>
          <Grid container spacing={3} justifyContent="center">
            {[1, 2, 3].map((bin, index) => (
              <Grid item xs={12} md={3} key={index}>
                <StyledPaper>
                  <img
                    src={`path_to_dustbin_image_${bin}`} // Update this path with the correct image path
                    alt={`Dustbin ${bin}`}
                    style={{ width: '100%' }}
                  />
                  <Button variant="contained" color="primary" style={{ margin: 5 }}>Bag</Button>
                  <Button variant="contained" color="secondary" style={{ margin: 5 }}>Weight (kg)</Button>
                </StyledPaper>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Complete Your Profile</DialogTitle>
        <DialogContent>
          <Typography>Please complete your profile information.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Go to Profile</Button>
        </DialogActions>
      </Dialog>
    </Root>
  );
};

export default Dashboard;
