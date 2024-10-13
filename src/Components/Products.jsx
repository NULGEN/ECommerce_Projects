import React from 'react';
import Product from './Product';

const Products = ({ products, onSelect }) => {
  return (
    <div className="products">
      {products.map((product) => (
        <Product key={product.id} product={product} onSelect={onSelect} />
      ))}
    </div>
  );
};

export default Products;
