import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/products';
import { motion } from 'framer-motion';

function ProductList({ onAddToCart, activeOfferId, category }) {
  const [searchTerm, setSearchTerm] = React.useState('');
  const categories = ['All', 'Electronics', 'Men', 'Women', 'Home', 'Kitchen', 'Beauty', 'Sports', 'Grocery'];
  const [activeCategory, setActiveCategory] = React.useState(category || 'All');

  const filteredProducts = products.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'All' ? true : p.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const getHeroContent = () => {
    switch (activeCategory) {
      case 'Men':
        return {
          title: "MEN'S COLLECTION",
          subtitle: "Classic styles and modern essentials.",
          image: "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=1600&q=80"
        };
      case 'Women':
        return {
          title: "WOMEN'S COLLECTION",
          subtitle: "Elegant designs and trending fashion.",
          image: "https://images.pexels.com/photos/34122317/pexels-photo-34122317.png"
        };
      default:
        return {
          title: "ARYFLY STORE",
          subtitle: "Premium shopping for the next generation.",
          image: "https://images.pexels.com/photos/6348114/pexels-photo-6348114.jpeg?auto=compress&cs=tinysrgb&w=1600"
        };
    }
  };

  const hero = getHeroContent();

  return (
    <>
      <div className="hero-section text-center text-white d-flex align-items-center position-relative" style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${hero.image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '50vh',
        minHeight: '400px'
      }}>
        <div className="container">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="display-3 fw-bold mb-2 neon-text"
          >{hero.title}</motion.h1>
          <p className="lead mb-4 fs-4">{hero.subtitle}</p>
        </div>

        {/* Hero-Docked Search Bar */}
        <div className="hero-search-container d-none d-md-block">
          <div className="hero-search-box">
            <i className="bi bi-search"></i>
            <input
              type="text"
              className="form-control"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="container my-4" id="shop">
        {/* Mobile Search */}
        <div className="d-md-none mb-4">
          <div className="hero-search-box">
            <i className="bi bi-search text-white"></i>
            <input
              type="text"
              className="form-control bg-dark text-white border-secondary"
              placeholder="Search items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Category Scroller */}
        <div className="category-scroller mb-4">
          {categories.map(cat => (
            <div
              key={cat}
              className={`category-pill ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat.toUpperCase()}
            </div>
          ))}
        </div>

        <div className="d-flex justify-content-between align-items-center mb-4">
          <h4 className="fw-bold m-0 neon-text">{activeCategory === 'All' ? 'Trending Now' : activeCategory}</h4>
          <span className="text-muted small">{filteredProducts.length} items found</span>
        </div>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredProducts.map(product => {
            const isOnSale = product.id === activeOfferId;
            const updatedProduct = {
              ...product,
              originalPrice: product.price,
              price: isOnSale ? Math.floor(product.price * 0.7) : product.price,
              isOnSale
            };
            return (
              <ProductCard
                key={product.id}
                product={updatedProduct}
                onAddToCart={onAddToCart}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default ProductList;
