import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { useState, createContext, useContext, useEffect } from 'react';

library.add(fas);

import './App.css';
import LandingPage from './components/LandingPage';
import Catalog from './components/catalogProduct';
import Product from './components/productPage';
import About from './components/About';
import Contact from './components/Contact';
import ItemsBag from './components/ItemsBag';
import Checkout from './components/Checkout';
import OrderConfirmation from './components/OrderConfirmation';
import { ToastContainer, Zoom, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Cart Context
const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within CartProvider');
  }
  return context;
};

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('participle_cart');
    const savedWishlist = localStorage.getItem('participle_wishlist');
    
    if (savedCart) {
      setCartItems(JSON.parse(savedCart));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('participle_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem('participle_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  const addToCart = (product, quantity = 1, selectedSize = null) => {
    if (!selectedSize) {
      toast.error('Please select a size');
      return;
    }

    const existingItem = cartItems.find(
      item => item.id === product.id && item.selectedSize === selectedSize
    );

    if (existingItem) {
      setCartItems(cartItems.map(item =>
        item.id === product.id && item.selectedSize === selectedSize
          ? { ...item, quantity: item.quantity + quantity }
          : item
      ));
      toast.success(`Updated ${product.name} quantity in cart`);
    } else {
      setCartItems([...cartItems, { ...product, quantity, selectedSize }]);
      toast.success(`${product.name} added to cart`);
    }
  };

  const removeFromCart = (productId, selectedSize) => {
    setCartItems(cartItems.filter(
      item => !(item.id === productId && item.selectedSize === selectedSize)
    ));
    toast.success('Item removed from cart');
  };

  const updateQuantity = (productId, selectedSize, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId, selectedSize);
      return;
    }

    setCartItems(cartItems.map(item =>
      item.id === productId && item.selectedSize === selectedSize
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const addToWishlist = (product) => {
    const existingItem = wishlist.find(item => item.id === product.id);
    
    if (existingItem) {
      setWishlist(wishlist.filter(item => item.id !== product.id));
      toast.success('Removed from wishlist');
    } else {
      setWishlist([...wishlist, product]);
      toast.success('Added to wishlist');
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemsCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  const value = {
    cartItems,
    wishlist,
    addToCart,
    removeFromCart,
    updateQuantity,
    addToWishlist,
    clearCart,
    cartTotal,
    cartItemsCount
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

// Auth Context
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem('participle_user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('participle_user', JSON.stringify(userData));
    toast.success(`Welcome back, ${userData.name}!`);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('participle_user');
    toast.success('Logged out successfully');
  };

  const register = (userData) => {
    setUser(userData);
    localStorage.setItem('participle_user', JSON.stringify(userData));
    toast.success(`Welcome to Participle+, ${userData.name}!`);
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    register
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/product" element={<Product />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/items-bag" element={<ItemsBag />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/order-confirmation" element={<OrderConfirmation />} />
          </Routes>
        </BrowserRouter>
        <ToastContainer
          hideProgressBar={false}
          pauseOnHover
          position="top-right"
          autoClose={4000}
          transition={Zoom}
        />
      </CartProvider>
    </AuthProvider>
  );
}

export default App;