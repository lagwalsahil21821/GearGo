import React, { useState, useEffect } from 'react';
import { Typography, Card, CardMedia, CardContent, Box, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { fetchProducts } from '../api/products';

const ProductListPage: React.FC = () => {
  const [selectedSizes, setSelectedSizes] = useState<{ [id: string]: string }>({});
  const [selectedColors, setSelectedColors] = useState<{ [id: string]: string }>({});
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProducts()
      .then(setProducts)
      .catch(e => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  const handleSizeChange = (id: string, value: string) => {
    setSelectedSizes(prev => ({ ...prev, [id]: value }));
  };
  const handleColorChange = (id: string, value: string) => {
    setSelectedColors(prev => ({ ...prev, [id]: value }));
  };

  if (loading) return <div>Loading products...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Box sx={{ width: '100vw', minHeight: 'calc(100vh - 128px)', bgcolor: 'grey.50', px: 0, py: 8, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw' }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, letterSpacing: 1, mb: 3, textAlign: 'center' }}>
        Gaming Consoles & Accessories
      </Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 3,
          width: '100%',
          px: { xs: 2, sm: 4, md: 8, lg: 12 },
        }}
      >
        {products.map((product: any) => (
          <Card
            key={product.id}
            sx={{
              borderRadius: 3,
              boxShadow: 2,
              transition: 'transform 0.2s, box-shadow 0.2s',
              '&:hover': {
                transform: 'translateY(-6px) scale(1.03)',
                boxShadow: 6,
              },
              textAlign: 'center',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              p: 1,
            }}
          >
            <Box
              sx={{
                textDecoration: 'none',
                color: 'inherit',
                flexGrow: 1,
                cursor: 'pointer',
              }}
              onClick={() => {
                if (product.id) {
                  window.location.href = `/product/${product.id}`;
                } else if (product._id) {
                  window.location.href = `/product/${product._id}`;
                } else {
                  alert('Product ID missing!');
                }
              }}
            >
              <CardMedia
                component="img"
                image={product.image}
                alt={product.name}
                sx={{ width: '100%', maxHeight: 180, objectFit: 'contain', mb: 1, mt: 2 }}
              />
              <CardContent>
                <Typography variant="h6" sx={{ mt: 1, minHeight: 56 }}>{product.name}</Typography>
                <Typography variant="subtitle1" color="primary" sx={{ fontWeight: 700, mb: 1 }}>
                  ₹{product.price.toLocaleString('en-IN')}
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1, mt: 2 }}>
                  <FormControl size="small" sx={{ minWidth: 80 }}>
                    <InputLabel>Color</InputLabel>
                    <Select
                      value={selectedColors[product.id] || product.variants.colors[0].name}
                      label="Color"
                      onChange={e => {
                        e.stopPropagation();
                        handleColorChange(product.id, e.target.value as string);
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      {product.variants.colors.map((color: any) => (
                        <MenuItem key={color.name} value={color.name}>
                          <Box sx={{ display: 'inline-flex', alignItems: 'center' }}>
                            <Box sx={{ width: 16, height: 16, borderRadius: '50%', bgcolor: color.code, border: '1px solid #ccc', mr: 1 }} />
                            {color.name}
                          </Box>
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl size="small" sx={{ minWidth: 70, ml: 1 }}>
                    <InputLabel>Size</InputLabel>
                    <Select
                      value={selectedSizes[product.id] || product.variants.sizes[0]}
                      label="Size"
                      onChange={e => {
                        e.stopPropagation();
                        handleSizeChange(product.id, e.target.value as string);
                      }}
                      onClick={e => e.stopPropagation()}
                    >
                      {product.variants.sizes.map((size: any) => (
                        <MenuItem key={size} value={size}>{size}</MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </CardContent>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ProductListPage;
