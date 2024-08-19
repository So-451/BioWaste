import React, { useState } from 'react';
import { Container, TextField, Button } from '@mui/material';

const Profile = () => {
  const [hospitalName, setHospitalName] = useState('');
  const [userID, setUserID] = useState('');
  const [email, setEmail] = useState('');

  const handleUpdate = () => {
    // Handle profile update logic
    alert('Profile updated!');
  };

  return (
    <Container>
      <h1>Profile</h1>
      <form onSubmit={handleUpdate}>
        <TextField label="Hospital Name" variant="outlined" fullWidth margin="normal" value={hospitalName} onChange={(e) => setHospitalName(e.target.value)} required />
        <TextField label="User ID" variant="outlined" fullWidth margin="normal" value={userID} onChange={(e) => setUserID(e.target.value)} required />
        <TextField label="Email Address" type="email" variant="outlined" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <Button type="submit" variant="contained" color="primary">Update Profile</Button>
      </form>
    </Container>
  );
};

export default Profile;
