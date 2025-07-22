import React from 'react';
import './App.css';
import { Layout, theme } from 'antd';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import BaseMenu from './components/baseMenu';
import Dashboard from './components/dashboard';
import Login from './components/login';
import { AuthProvider, useAuth } from './contexts/AuthContext'

const { Header, Content, Footer } = Layout;

const items = [{
  key: 'dashboard',
  label: 'dashboard',
  path: '',
},
{
  key: 'logs',
  label: 'logs',
  path: '/logs'
},
{
  key: 'settings',
  label: 'settings',
  path: '/settings'
},
{
  key: 'login',
  label: 'login',
  path: '/login'
}]

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout className="app-layout">
      <Header className="app-header">
        <div className="demo-logo" />
        <BaseMenu items={items} /> {/* Replace Menu with BaseMenu */}
      </Header>
      <Content className="app-content">
        <Routes>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Content>
      <Footer className="app-footer">
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};

export default App;