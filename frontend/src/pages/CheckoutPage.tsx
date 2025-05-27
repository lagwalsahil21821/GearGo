import React from 'react';
import { Typography, Button, Box, Card, CardContent } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

const CheckoutPage: React.FC = () => {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
    }
  }, [isLoggedIn, navigate]);

  return (
    <Box sx={{ width: '100vw', minHeight: 'calc(100vh - 128px)', bgcolor: 'grey.50', px: 0, py: 4, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Card sx={{ maxWidth: 500, width: '100%' }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>Checkout</Typography>
          <Typography variant="body1" gutterBottom>
            This is a mock payment page. Your order is placed!
          </Typography>
          <Typography sx={{ mt: 2, fontWeight: 700 }}>Thank you for shopping with us!</Typography>
          <Button variant="contained" color="primary" component={Link} to="/" sx={{ mt: 3 }}>
            Back to Home
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CheckoutPage;
