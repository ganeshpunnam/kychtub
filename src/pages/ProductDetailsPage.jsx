import React from 'react';
import ProductDetails from '../components/ProductDetails';

const ProductDetailsPage = ({ compareList, onCompare }) => {
  return (
    <div>
      <ProductDetails onCompare={onCompare} compareList={compareList} />
    </div>
  );
};

export default ProductDetailsPage;
