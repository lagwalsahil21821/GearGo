import React, { useState, useEffect } from 'react';
import { Typography, Card, CardContent, Box, MenuItem, Select, FormControl, InputLabel, Button } from '@mui/material';
import { fetchProductById } from '../api/products';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../components/CartContext';
import { useAuth } from '../components/AuthContext';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState<any>(null);
  const [color, setColor] = useState('');
  const [size, setSize] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { addToCart } = useCart();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    if (!id) return;
    fetchProductById(id)
      .then((prod) => {
        setProduct(prod);
        setColor(prod.variants.colors[0]?.name || '');
        setSize(prod.variants.sizes[0] || '');
      })
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Box sx={{ width: '100vw', minHeight: 'calc(100vh - 128px)', bgcolor: 'grey.50', px: 0, py: 4, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'block' }}>Loading...</Box>;
  if (error || !product) return <Box sx={{ width: '100vw', minHeight: 'calc(100vh - 128px)', bgcolor: 'grey.50', px: 0, py: 4, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'block' }}>{error || 'Product not found.'}</Box>;

  const handleAddToCart = () => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    addToCart({
      id: product.id,
      color,
      size,
      quantity: 1
    });
    navigate('/cart');
  };

  return (
    <Box sx={{ width: '100vw', minHeight: 'calc(100vh - 128px)', bgcolor: 'grey.50', px: 0, py: 0, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'block' }}>
      <Card sx={{ maxWidth: 900, width: '100%', mx: 'auto', my: 4 }}>
        <CardContent>
          <img src={product.image} alt={product.name} style={{ width: '100%', maxHeight: 250, objectFit: 'contain' }} />
          <Typography variant="h5" gutterBottom>{product.name}</Typography>
          <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
            ₹{product.price ? product.price.toLocaleString('en-IN') : '--'}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mt: 2 }}>
            <FormControl size="small" sx={{ minWidth: 100 }}>
              <InputLabel>Color</InputLabel>
              <Select
                value={color}
                label="Color"
                onChange={e => setColor(e.target.value as string)}
              >
                {product.variants.colors.map((c: any) => (
                  <MenuItem key={c.name} value={c.name}>
                    <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                      <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: c.code, border: '1px solid #ccc', mr: 1 }} />
                      {c.name}
                    </Box>
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl size="small" sx={{ minWidth: 80 }}>
              <InputLabel>Size</InputLabel>
              <Select
                value={size}
                label="Size"
                onChange={e => setSize(e.target.value as string)}
              >
                {product.variants.sizes.map((s: any) => (
                  <MenuItem key={s} value={s}>{s}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" color="primary" fullWidth onClick={handleAddToCart} sx={{ mt: 2 }}>
            Add to Cart
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ProductDetailPage;
