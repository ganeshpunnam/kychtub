import React from 'react';
import { Table, Button } from 'antd';
import './CompareProducts.css';

const CompareProducts = ({ products, onRemove, onAddMore }) => {
  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
    },
    {
      title: 'Price',
      dataIndex: 'price',
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <Button type="danger" onClick={() => onRemove(record.id)}>
          Remove
        </Button>
      ),
    },
  ];

  return (
    <div className="compare-products">
      <Table
        columns={columns}
        dataSource={products} // Ensure this is the updated product list
        rowKey="id"
        pagination={false}
      />
      <Button
        type="primary"
        onClick={onAddMore}
        disabled={products.length >= 4}  // Disable button if 4 products are already added
      >
        Add More
      </Button>
    </div>
  );
};

export default CompareProducts;
