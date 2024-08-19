import React from 'react';
import { Button, Container, Typography, Box, Grid, Link as MuiLink, AppBar, Toolbar, Tabs, Tab } from '@mui/material';
import { Link } from 'react-router-dom';
import './LandingPage.css';  // Keep any additional custom styles if needed
import { useNavigate } from 'react-router-dom';

const catchyMager = { fontFamily: 'Catchy Mager', fontWeight: 'bold' };


const LandingPage = () => {
  return (
    <div className="landing-page" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/main-pic.jpg)` }}>
      <AppBar position="static" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <Tabs value={false} aria-label="nav tabs">
            <Tab label="Home" component={Link} to="/" />
            <Tab label="Facilities" component={Link} to="/facilities" />
            <Tab label="Affiliations" component={Link} to="/affiliations" />
            <Tab label="Contact Us" component={Link} to="/contact" />
            <Tab label="Help" component={Link} to="/help" />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Box sx={{
        textAlign: 'center',
        py: 2,
        color: 'black',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        mt: 6,  // Add margin-top to push the content up
      }}>
        <Box>
          <Typography variant="h5" component="h1" gutterBottom style={{ color: 'black', ...catchyMager }}>
            Welcome to
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom style={{ color: 'black', ...catchyMager }}>
            Biomedical Waste
          </Typography>
          <Typography variant="h2" component="h1" gutterBottom style={{ color: 'black', ...catchyMager }}>
            Management Portal
          </Typography>
          <Typography variant="body1" component="p" gutterBottom style={{ color: 'black', ...catchyMager }}>
            Let the waste of the "sick" not contaminate the lives of "The healthy"
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Grid container spacing={2} justifyContent="center">
            <Grid item>
              <Button component={Link} to="/signup" variant="contained" color="primary">Register</Button>
            </Grid>
            <Grid item>
              <Button component={Link} to="/login" variant="contained" color="secondary">Log In</Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ flexGrow: 0.5 }} />  {/* Add this line to create flexible space between buttons and footer */}
        <footer className="footer">
          <Container maxWidth="md">
            <Grid container spacing={3} sx={{ color: 'white', textAlign: 'left' }}>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Contact Us</Typography>
                <Typography variant="body2">123 Waste Management St.<br />Health City, HC 12345</Typography>
                <Typography variant="body2">Phone: (123) 456-7890</Typography>
                <Typography variant="body2">Email: <MuiLink href="mailto:info@wastemgmt.com" color="inherit">info@wastemgmt.com</MuiLink></Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>Follow Us</Typography>
                <Typography variant="body2">
                  <MuiLink href="https://linkedin.com" target="_blank" rel="noopener" color="inherit">LinkedIn</MuiLink><br />
                  <MuiLink href="https://facebook.com" target="_blank" rel="noopener" color="inherit">Facebook</MuiLink><br />
                  <MuiLink href="https://instagram.com" target="_blank" rel="noopener" color="inherit">Instagram</MuiLink>
                </Typography>
              </Grid>
              <Grid item xs={12} md={4}>
                <Typography variant="h6" gutterBottom>About Us</Typography>
                <Typography variant="body2">We are dedicated to ensuring that biomedical waste is managed in the most efficient and eco-friendly manner.</Typography>
              </Grid>
            </Grid>
          </Container>
        </footer>
      </Box>
    </div>
  );
};

export default LandingPage;
