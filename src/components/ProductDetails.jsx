import React, { useState, useEffect } from 'react';
import { Table, Button } from 'antd';
import './ProductDetails.css';

const ProductDetails = ({ onCompare, compareList }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
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
      title: 'Compare',
      render: (text, record) => (
        <Button
          type="primary"
          onClick={() => onCompare(record)}
          disabled={compareList.some(product => product.id === record.id)}
        >
          Compare
        </Button>
      ),
    },
  ];

  return (
    <div className="product-details">
      <Table
        columns={columns}
        dataSource={products}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />
    </div>
  );
};

export default ProductDetails;
