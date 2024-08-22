// src/contexts/CompareContext.js
import React, { createContext, useState, useContext } from 'react';

const CompareContext = createContext();

export const CompareProvider = ({ children }) => {
  const [compareList, setCompareList] = useState([]);

  const addToCompare = product => {
    setCompareList(prevList => 
      prevList.some(p => p.id === product.id) 
        ? prevList 
        : [...prevList, product]
    );
  };

  const removeFromCompare = productId => {
    setCompareList(prevList => prevList.filter(p => p.id !== productId));
  };

  return (
    <CompareContext.Provider value={{ compareList, addToCompare, removeFromCompare }}>
      {children}
    </CompareContext.Provider>
  );
};

export const useCompare = () => useContext(CompareContext);
