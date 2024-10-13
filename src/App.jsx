import { useState } from 'react';
import axios from 'axios';
import './App.css';
import Products from './Components/Products';

function App() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const fetchProducts = () => {
    if (products.length > 0) {
      console.log('Ürünler zaten yüklendi.');
      return;
    }
    axios
      .get('https://fakestoreapi.com/products')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error('Error: ', error);
      });
  };

  return (
    <div className="app-container">
      <div className="product-details">
        {selectedProduct ? (
          <>
            <h3>{selectedProduct.title}</h3>
            <img src={selectedProduct.image} alt={selectedProduct.title} />
            <p>{selectedProduct.description}</p>
            <p>
              <strong>Fiyat:</strong> {selectedProduct.price} USD
            </p>
          </>
        ) : (
          <p>Bir ürüne tıklayarak detayları görebilirsiniz.</p>
        )}
      </div>

      <div className="product-list">
        <button onClick={fetchProducts}>Ürünleri Getir</button>
        <Products products={products} onSelect={setSelectedProduct} />
      </div>
    </div>
  );
}

export default App;
