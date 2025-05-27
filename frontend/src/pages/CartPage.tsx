import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Card, CardContent, Button, Box } from '@mui/material';
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';
import products from '../data/products'; // Adjust the import based on your project structure

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const { isLoggedIn } = useAuth();

  if (!cart.length) {
    return (
      <Box
        sx={{
          width: '100vw',
          minHeight: 'calc(100vh - 128px)',
          bgcolor: 'grey.50',
          px: 0,
          py: 4,
          position: 'relative',
          left: '50%',
          right: '50%',
          marginLeft: '-50vw',
          marginRight: '-50vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography>Your cart is empty.</Typography>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        width: '100vw',
        minHeight: 'calc(100vh - 128px)',
        bgcolor: 'grey.50',
        px: 0,
        py: 4,
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box sx={{ maxWidth: 600, width: '100%' }}>
        <Typography variant="h5" sx={{ mb: 2 }}>
          Cart
        </Typography>
        {cart.map((item) => {
          const product = products.find((p: any) => p.id === item.id);
          if (!product) return null;
          const colorObj = product.variants.colors.find((c: any) => c.name === item.color);
          return (
            <Card key={`${item.id}-${item.color}-${item.size}`} sx={{ mb: 2 }}>
              <CardContent sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: 80, maxHeight: 80, objectFit: 'contain' }}
                />
                <Box sx={{ flex: 1 }}>
                  <Typography>{product.name}</Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    Color:{' '}
                    <Box
                      component="span"
                      sx={{
                        display: 'inline-block',
                        width: 16,
                        height: 16,
                        borderRadius: '50%',
                        bgcolor: colorObj?.code || '#ccc',
                        border: '1px solid #ccc',
                        verticalAlign: 'middle',
                        mr: 1,
                      }}
                    />
                    {item.color}
                  </Typography>
                  <Typography variant="body2">Size: {item.size}</Typography>
                  <Typography variant="body2">Qty: {item.quantity}</Typography>
                  <Typography variant="subtitle2" sx={{ fontWeight: 700, mt: 1 }}>
                    ₹{product.price.toLocaleString('en-IN')}
                  </Typography>
                </Box>
                <Button
                  color="error"
                  onClick={() => removeFromCart(item.id, item.color, item.size)}
                >
                  Remove
                </Button>
              </CardContent>
            </Card>
          );
        })}
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          component={Link}
          to={isLoggedIn ? "/checkout" : "/login"}
        >
          Proceed to Checkout
        </Button>
        <Button
          variant="outlined"
          color="error"
          sx={{ mt: 2, ml: 2 }}
          onClick={clearCart}
        >
          Clear Cart
        </Button>
      </Box>
    </Box>
  );
};

export default CartPage;
