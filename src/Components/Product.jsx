import React from 'react';
import './Product.css';

const Product = ({ product, onSelect }) => {
  return (
    <div className="product-item" onClick={() => onSelect(product)}>
      <img src={product.image} alt={product.title} />
      <div>
        <h3>{product.title}</h3>
        <p>{product.description.substring(0, 50)}...</p>
      </div>
    </div>
  );
};

export default Product;
