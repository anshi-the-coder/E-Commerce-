import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductPage.css';

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const res = await axios.get(`/api/products/${id}`);
      setProduct(res.data);
    };
    fetchProduct();
  }, [id]);

  if (!product) return <h2>Loading...</h2>;

  return (
    <div className="container">
      <h1>{product.name}</h1>
      <img src={product.image} alt={product.name} width="300" />
      <p>{product.description}</p>
      <h3>${product.price}</h3>
      <button>Add to Cart</button>
    </div>
  );
};

export default ProductPage;

