import React from 'react';
import { Menu } from 'antd';
import { useNavigate, useLocation } from 'react-router-dom';

interface MenuItem {
  key: string;
  label: string;
  path: string;
}

interface BaseMenuProps {
  items: MenuItem[];
}

const BaseMenu: React.FC<BaseMenuProps> = ({ items }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e: { key: string }) => {
    const selectedItem = items.find(item => item.key === e.key);
    if (selectedItem) {
      navigate(selectedItem.path);
    }
  };

  return (
    <Menu
      className="app-menu" // Add className for consistent styling
      onClick={handleClick}
      selectedKeys={[location.pathname]} // 根据当前路径设置选中项
      mode="horizontal"
      items={items.map(item => ({
        key: item.key,
        label: item.label,
      }))}
    />
  );
};

export default BaseMenu;