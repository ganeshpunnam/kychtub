import React from 'react';
import { Layout, Avatar } from 'antd';
import './Navbar.css';

const { Header } = Layout;

const Navbar = () => {
  return (
    <Header className="navbar">
      <div className="navbar-logo">KycHub</div>
      <Avatar className="navbar-avatar" size="large">U</Avatar>
    </Header>
  );
};

export default Navbar;
