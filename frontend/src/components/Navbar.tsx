import React from 'react';
import { AppBar, Toolbar, Typography, Link as MuiLink, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const Navbar: React.FC = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <AppBar position="fixed" color="primary" sx={{ width: '100vw', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', px: 0, top: 0, boxShadow: 2, zIndex: 1201 }}>
      <Toolbar sx={{ maxWidth: '100%', width: '100%', mx: 0, px: { xs: 2, sm: 4, md: 8, lg: 12 }, minHeight: { xs: 56, sm: 64 } }}>
        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 1, mr: 4 }}>
          <MuiLink component={Link} to="/" color="inherit" underline="none">
            GearGo
          </MuiLink>
        </Typography>
        <Box sx={{ flexGrow: 1 }} />
        <MuiLink component={Link} to="/cart" color="inherit" underline="none" sx={{ fontWeight: 500, mx: 2 }}>
          Cart
        </MuiLink>
        {isLoggedIn ? (
          <Typography variant="body2" sx={{ fontWeight: 500, ml: 2 }}>
            {user?.displayName || user?.email}
          </Typography>
        ) : (
          <MuiLink component={Link} to="/login" color="inherit" underline="none" sx={{ fontWeight: 500 }}>
            Login
          </MuiLink>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
