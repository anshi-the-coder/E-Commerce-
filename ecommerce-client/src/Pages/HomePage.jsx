import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await axios.get('/api/products');
      setProducts(res.data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Featured Products</h1>
      <div className="grid">
        {products.map((product) => (
          <Link key={product._id} to={`/product/${product._id}`} className="card">
            <img src={product.image} alt={product.name} className="product-img" />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
