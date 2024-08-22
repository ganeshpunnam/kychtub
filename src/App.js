import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProductDetailsPage from './pages/ProductDetailsPage';
import CompareProductsPage from './pages/CompareProductsPage';
import './App.css';

function App() {
  const [compareList, setCompareList] = useState([]);

  const handleCompare = product => {
    if (!compareList.some(p => p.id === product.id)) {
      setCompareList([...compareList, product]);
    }
  };

  const handleRemove = productId => {
    setCompareList(compareList.filter(product => product.id !== productId));
  };

  return (
    <Router>
      <Navbar />
      <Sidebar />
      <div className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <ProductDetailsPage
                compareList={compareList}
                onCompare={handleCompare}
              />
            }
          />
          <Route
            path="/compare"
            element={
              <CompareProductsPage
                products={compareList}
                onRemove={handleRemove}
                onAddMore={handleCompare}
              />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
