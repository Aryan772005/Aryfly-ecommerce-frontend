import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import Cart from './components/Cart';
import AccountPanel from './components/AccountPanel';
import OrdersPanel from './components/OrdersPanel';
import MenuPanel from './components/MenuPanel';
import ChatBot from './components/ChatBot';
import { products } from './data/products';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeOfferId, setActiveOfferId] = useState(null);
  const [offerText, setOfferText] = useState('LOADING OFFERS...');

  const addToCart = (product) => {
    setCartItems([...cartItems, { ...product }]);
    setIsCartOpen(true);
  };

  const toggleCart = () => setIsCartOpen(!isCartOpen);
  const toggleAccount = () => setIsAccountOpen(!isAccountOpen);
  const toggleOrders = () => setIsOrdersOpen(!isOrdersOpen);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    document.body.className = isDarkMode ? '' : 'theme-light';
  }, [isDarkMode]);

  useEffect(() => {
    const rotate = () => {
      const randomIndex = Math.floor(Math.random() * products.length);
      const product = products[randomIndex];
      if (product) {
        setActiveOfferId(product.id);
        setOfferText(`🔥 LIVE: ${product.name.toUpperCase()} SALE`);
      }
    };
    rotate();
    const interval = setInterval(rotate, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Header
          onCartToggle={toggleCart}
          onAccountToggle={toggleAccount}
          onOrdersToggle={toggleOrders}
          onMenuToggle={toggleMenu}
          toggleTheme={toggleTheme}
          isDarkMode={isDarkMode}
          cartCount={cartItems.length}
          offerText={offerText}
        />
        <main className="flex-grow-1">
          <Routes>
            <Route path="/" element={<ProductList onAddToCart={addToCart} activeOfferId={activeOfferId} />} />
            <Route path="/collection" element={<ProductList onAddToCart={addToCart} activeOfferId={activeOfferId} />} />
            <Route path="/men" element={<ProductList onAddToCart={addToCart} activeOfferId={activeOfferId} category="Men" />} />
            <Route path="/women" element={<ProductList onAddToCart={addToCart} activeOfferId={activeOfferId} category="Women" />} />
          </Routes>
        </main>
        <Footer />
        <ChatBot />

        <Cart cartItems={cartItems} onClose={toggleCart} isOpen={isCartOpen} />
        <AccountPanel isOpen={isAccountOpen} onClose={toggleAccount} toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        <OrdersPanel isOpen={isOrdersOpen} onClose={toggleOrders} />
        <MenuPanel isOpen={isMenuOpen} onClose={toggleMenu} />
      </div>
    </Router>
  );
}

export default App;
