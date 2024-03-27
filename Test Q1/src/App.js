
import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/ProductPage'; 

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<AllProducts />} />
        <Route path="/product/:productId" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App;
