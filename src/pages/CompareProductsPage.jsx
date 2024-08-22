import React, { useState } from 'react';
import CompareProducts from '../components/CompareProducts';
import AddMoreProductsModal from '../components/AddMoreProductsModal';

const CompareProductsPage = ({ products, onRemove, onAddMore }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddMore = () => {
    setIsModalVisible(true);
  };

  const handleAddProducts = selectedProducts => {
    // Ensure selectedProducts is an array
    if (Array.isArray(selectedProducts)) {
      // Call the onAddMore prop to update the compare list in the App component
      onAddMore(selectedProducts);
    }
    setIsModalVisible(false);
  };

  return (
    <div>
      <CompareProducts
        products={products}  // This should be the updated list
        onRemove={onRemove}
        onAddMore={handleAddMore}
      />
      <AddMoreProductsModal
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        onAdd={handleAddProducts}
      />
    </div>
  );
};

export default CompareProductsPage;
