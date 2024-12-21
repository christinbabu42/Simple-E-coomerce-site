import React from 'react';
import { useProductContext } from './ProductContext.js';

const HomePage = () => {
  const { products } = useProductContext();

  console.log('Products in HomePage:', products);

  return (
    <div className="home-page">
      <nav className="navbar">
        <div className="logo">🛒 ShopEase</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#cart">Cart</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="user-actions">
          <button className="login-btn">Login</button>
        </div>
      </nav>
      <header className="home-header">
        <h1>🛒 Your Favorite Shop</h1>
        <p>Find amazing products at unbeatable prices!</p>
      </header>
      <main>
        <h2 id="products">Available Products</h2>
        <div className="product-grid">
          {products.length === 0 ? (
            <p className="no-products">No products available. Check back later!</p>
          ) : (
            products.map((product) => (
              <div className="product-card" key={product.id}>
                <h3>{product.name}</h3>
                <p className="price">₹{product.price}</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};

export default HomePage;
