import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import {
  AppstoreOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import './Sidebar.css';

const { Sider } = Layout;

const Sidebar = () => {
  return (
    <Sider className="sidebar">
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1" icon={<ShoppingCartOutlined />}>
          <Link to="/">Product Details</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<AppstoreOutlined />}>
          <Link to="/compare">Compare Products</Link>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Sidebar;
