import React from 'react';
import { Button, Typography, Box, Card, CardContent } from '@mui/material';
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';

// Load Firebase config from environment variables
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY!,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN!,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID!,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET!,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID!,
  appId: import.meta.env.VITE_FIREBASE_APP_ID!,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// Load pre-approved emails from environment variable (comma-separated)
const preApprovedEmails = (import.meta.env.VITE_PREAPPROVED_EMAILS || '').split(',').map((e: string) => e.trim()).filter(Boolean);

const GoogleLoginPage: React.FC = () => {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const email = result.user.email;
      if (email && preApprovedEmails.includes(email)) {
        window.location.href = '/';
      } else {
        alert('Email not pre-approved.');
      }
    } catch (error: any) {
      alert('Login failed: ' + (error?.message || 'Unknown error'));
      console.error(error);
    }
  };

  return (
    <Box sx={{ width: '100vw', minHeight: 'calc(100vh - 128px)', bgcolor: 'grey.50', px: 0, py: 4, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 400, width: '100%' }}>
        <CardContent>
          <Box textAlign="center" mt={2}>
            <Typography variant="h5" gutterBottom>Sign in with Google</Typography>
            <Button variant="contained" color="primary" onClick={handleLogin} sx={{ mt: 2 }}>
              Sign in with Google
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default GoogleLoginPage;