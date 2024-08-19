import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import theme from './components/theme';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import SignUp from './components/SignUp';
import LogIn from './components/Login';
import Profile from './components/Profile';

const App = () => {
  const [user, setUser] = useState({
    hospitalName: '',
    userID: '',
    email: '',
    address: '',
    hospitalInfo: '',
  });

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp setUser={setUser} />} />
          <Route path="/login" element={<LogIn setUser={setUser} />} />
          <Route path="/dashboard" element={<Dashboard user={user} setUser={setUser} />} />
          <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
