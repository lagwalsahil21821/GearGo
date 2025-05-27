import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CssBaseline, Box } from '@mui/material';
import './App.css'
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import GoogleLoginPage from './pages/GoogleLoginPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { CartProvider } from './components/CartContext';
import { AuthProvider } from './components/AuthContext';

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <CssBaseline />
          <Navbar />
          <Box sx={{ width: '100vw', minHeight: '80vh', bgcolor: 'grey.50', px: 0, py: 0, position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', display: 'flex', flexDirection: 'column' }}>
            <Routes>
              <Route path="/" element={<ProductListPage />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<GoogleLoginPage />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </Box>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App
