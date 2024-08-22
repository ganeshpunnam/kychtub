import React, { useState, useEffect } from 'react';
import { Modal, Table, Button } from 'antd';
import './AddMoreProductsModal.css';

const AddMoreProductsModal = ({ visible, onCancel, onAdd }) => {
  const [products, setProducts] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products));
  }, []);

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
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: selectedKeys => setSelectedRowKeys(selectedKeys),
  };

  const handleAdd = () => {
    const selectedProducts = products.filter(product =>
      selectedRowKeys.includes(product.id)
    );
    onAdd(selectedProducts);
  };

  return (
    <Modal
      visible={visible}
      title="Add More Products"
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button
          key="add"
          type="primary"
          onClick={handleAdd}
        >
          Add
        </Button>,
      ]}
    >
      <Table
        columns={columns}
        dataSource={products}
        rowSelection={rowSelection}
        rowKey="id"
      />
    </Modal>
  );
};

export default AddMoreProductsModal;
